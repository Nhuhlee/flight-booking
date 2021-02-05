const express = require("express");
const {
  getFlights,
  createFlight,
  replaceFlight,
  updateFlight,
  deleteFlight,
  getFlightDetail,
  getFlightsByFunction,
} = require("../services/flight.service");

const router = express.Router();

router.get("/flights", getFlights);
router.post("/flights", createFlight);
router.put("/flights/:flightId", replaceFlight);
router.patch("/flights/:flightId", updateFlight);
router.get("/flights/:flightId", getFlightDetail);
router.delete("/flights/:flightId", deleteFlight);
router.post("/findflight", getFlightsByFunction);

module.exports = router;
