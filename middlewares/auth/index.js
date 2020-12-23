const jwt = require("jsonwebtoken");
const util = require("util");
const config = require("./../../config");

const jwtVerify = util.promisify(jwt.verify);

module.exports.authenticate = (req, res, next) => {
  const token = req.headers.token;
  console.log(token);
  jwtVerify(token, config.JWT_SECRET_KEY)
    .then((decoded) => {
      if (!decoded)
        return Promise.reject({
          message: "Invalid token",
          status: 400,
        });
      console.log(decoded);
      req.user = decoded;
      return next();
    })
    .catch((err) => res.status(err.status).json(err));
};

module.exports.authorization = (userTypeArray) => (req, res, next) => {
  const user = req.user;
  if (userTypeArray.indexOf(user.userType) > -1) return next();
  else
    return res
      .status(401)
      .json({ message: "You do not have permission for this action" });
};
