const validator = require("validator");
const { User } = require("./../../models/user.model");

module.exports.createUserValidation = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;
  const fullName = req.body.fullName;

  const errors = {};

  //email
  if (!email) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is invalid, please check";
  } else {
    User.findOne({ email }).then((email) => {
      if (email)
        return Promise.reject({
          message: "Email already exists",
          status: 400,
        });
    });
  }

  //fullName
  if (!fullName) {
    errors.fullName = "Fullname is required";
  }

  //Password

  if (!password) {
    errors.password = "Password is required";
  } else if (!passwordConfirm) {
    errors.password = "Please confirm your password";
  } else if (!validator.equals(password, passwordConfirm)) {
    errors.password = "Passwords do not match, please try again";
  }

  if (Object.keys(errors).length > 0) return res.status(400).json(errors);
  return next();
};
