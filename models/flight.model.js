const mongoose = require("mongoose");
const { SeatSchema } = require("./seat.model");
const FlightSchema = new mongoose.Schema({
  originAirportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  originAirport: { type: String, required: true },
  originAirportCode: { type: String, required: true },
  destinationAirportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  destinationAirport: { type: String, required: true },
  destinationAirportCode: { type: String, required: true },
  startTime: { type: Date, required: true },
  seats: [SeatSchema],
  price: { type: Number, default: 0 },
});

const Flight = mongoose.model("Flight", FlightSchema, "Flight");

module.exports = {
  FlightSchema,
  Flight,
};
