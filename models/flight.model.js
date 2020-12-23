const mongoose = require("mongoose");
const { SeatSchema } = require("./seat.model");
const FlightSchema = new mongoose.Schema({
  originAirportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  destinationAirportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  startTime: { type: Date, required: true },
  seats: [SeatSchema],
  price: { type: Number, default: 0 },
});

const Flight = mongoose.model("Flight", FlightSchema, "Flight");

module.exports = {
  FlightSchema,
  Flight,
};
