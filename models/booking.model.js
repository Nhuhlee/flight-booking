const mongoose = require("mongoose");
const { SeatSchema } = require("./seat.model");

const BookingSchema = new mongoose.Schema({
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
  },
  from: { type: String, required: true },
  to: { type: String, required: true },
  time: { type: Date, required: true },
  seats: [SeatSchema],
  totalPrice: { type: Number },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

const Booking = mongoose.model("Booking", BookingSchema, "Booking");

module.exports = {
  BookingSchema,
  Booking,
};