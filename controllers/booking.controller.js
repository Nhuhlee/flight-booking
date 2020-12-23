const express = require("express");
const {
  createBooking,
  getBookings,
  getBookingsByUser,
  updateBooking,
  printBookingForUser,
} = require("./../services/booking.service");
const { authenticate, authorization } = require("./../middlewares/auth");

const router = express.Router();
router.post("/booking", authenticate, createBooking);
router.get("/booking", getBookings);
router.get("/booking/mybookings", authenticate, getBookingsByUser);
router.patch("/booking/:id", updateBooking);
router.get("/booking/print", authenticate, printBookingForUser);

module.exports = router;
