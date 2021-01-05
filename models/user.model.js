const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  userType: { type: String, default: "Client" },
});

UserSchema.pre("save", function (next) {
  console.log("presave", this);
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt
    .genSalt(10)
    .then((salt) => {
      return bcrypt.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
      next();
    });
});

const User = mongoose.model("User", UserSchema, "User");

module.exports = {
  UserSchema,
  User,
};