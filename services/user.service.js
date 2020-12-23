const { User } = require("./../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const util = require("util");
const config = require("./../config");

const jwtSign = util.promisify(jwt.sign);

module.exports.createUser = (req, res, next) => {
  const { email, password, fullName } = req.body;
  return User.create({ email, password, fullName })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(200).json(err));
};

module.exports.getUsers = (req, res, next) => {
  return User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  let _user;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject({
          message: "User not found",
          status: 404,
        });
      }
      _user = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isMatched) => {
      if (!isMatched) {
        return Promise.reject({
          message: " Password does not match",
          status: 403,
        });
      }
      const payload = {
        _id: _user._id,
        email: _user.email,
        fullName: _user.fullName,
        userType: _user.userType,
      };
      return jwtSign(payload, config.JWT_SECRET_KEY, { expiresIn: "1h" });
    })
    .then((token) => {
      return res.status(200).json({
        message: "Login successful",
        token,
      });
    })
    .catch((err) => {
      return res.status(err.status).json(err);
    });
};

module.exports.updatePassword = (req, res, next) => {
  const { email, oldPassword, passwordConfirm, newPassword } = req.body;
  let _user;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject({
          message: "Email cannot be associated with any users",
          status: 404,
        });
      }
      _user = user;
      return bcrypt.compare(oldPassword, user.password);
    })
    .then((isMatched) => {
      if (!isMatched) {
        return Promise.reject({
          message: "Password does not match",
          status: 403,
        });
      }
      if (newPassword !== passwordConfirm) {
        return Promise.reject({
          message: "Password confirmation failed",
          status: 403,
        });
      }
      return bcrypt.compare(_user.password, newPassword);
    })
    .then((isSimilar) => {
      if (isSimilar) {
        return Promise.reject({
          message: "New password cannot be the same as existing password",
          status: 403,
        });
      }
      _user.password = newPassword;
      return _user.save();
    })
    .then(() =>
      res.status(200).json({
        message: "Password changed successfully",
      })
    )
    .catch((err) => res.status(err.status).json(err));
};

module.exports.getMe = (req, res, next) => res.status(200).json(req.user);
