const mongoose = require("mongoose");
const AirportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  country: { type: String, required: true },
});

const Airport = mongoose.model("Airport", AirportSchema, "Airport");

module.exports = {
  AirportSchema,
  Airport,
};
