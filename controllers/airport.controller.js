const express = require("express");
const {
  getAirport,
  createAirport,
  getAirportDetail,
  replaceAirport,
  updateAirport,
  deleteAirport,
} = require("../services/airport.service");

const router = express.Router();

router.get("/airports", getAirport);
router.post("/airports", createAirport);
router.put("/airports/:airportId", replaceAirport);
router.patch("/airports/:airportId", updateAirport);
router.get("/airports/:airportId", getAirportDetail);
router.delete("/airports/:airportId", deleteAirport);

module.exports = router;
