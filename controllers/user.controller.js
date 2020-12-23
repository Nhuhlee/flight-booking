const express = require("express");
const {
  createUser,
  getUsers,
  login,
  updatePassword,
  getMe,
} = require("./../services/user.service");
const { authenticate, authorization } = require("./../middlewares/auth");
const { createUserValidation } = require("./../middlewares/validation");

const router = express.Router();

router.post("/users", createUserValidation, createUser);
router.get("/users", getUsers);
router.post("/login", login);
router.patch("/users/updatePassword", updatePassword);
router.get(
  "/users/me",
  authenticate,
  authorization(["Client", "Admin"]),
  getMe
);

module.exports = router;
