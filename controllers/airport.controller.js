const express = require("express");

const { uploadImage } = require("../middlewares/uploadImage");

const {
  getAirport,
  createAirport,
  getAirportDetail,
  replaceAirport,
  updateAirport,
  deleteAirport,
  uploadPhoto,
} = require("../services/airport.service");

const router = express.Router();

router.get("/airports", getAirport);
router.post("/airports", createAirport);
router.put("/airports/:airportId", replaceAirport);
router.patch("/airports/:airportId", updateAirport);
router.get("/airports/:airportId", getAirportDetail);
router.delete("/airports/:airportId", deleteAirport);
router.patch("/updatePhoto", uploadImage("photo"), uploadPhoto);

module.exports = router;
