const { Airport } = require("../models/airport.model");
const { Flight } = require("../models/flight.model");
const { Seat } = require("../models/seat.model");

const seatCodeArray = [
  "1A",
  "1B",
  "1C",
  "1D",
  "1E",
  "1F",
  "2A",
  "2B",
  "2C",
  "2D",
  "2E",
  "2F",
  "3A",
  "3B",
  "3C",
  "3D",
  "3E",
  "3F",
  "4A",
  "4B",
  "4C",
  "4D",
  "4E",
  "4F",
  "5A",
  "5B",
  "5C",
  "5D",
  "5E",
  "5F",
  "6A",
  "6B",
  "6C",
  "6D",
  "6E",
  "6F",
];

module.exports.createFlight = (req, res, next) => {
  const seats = seatCodeArray.map((code) => {
    return new Seat({ code });
  });
  let originAirport;
  let originAirportCode;
  let destinationAirport;
  let destinationAirportCode;
  const { originAirportId, destinationAirportId, startTime, price } = req.body;
  Airport.findById(originAirportId)
    .then((airport) => {
      if (!airport)
        return Promise.reject({
          message: "Airport not found",
          status: 404,
        });
      originAirport = airport.name;
      originAirportCode = airport.code;
      return Airport.findById(destinationAirportId);
    })
    .then((airport) => {
      if (!airport)
        return Promise.reject({
          message: "Airport not found",
          status: 404,
        });
      destinationAirport = airport.name;
      destinationAirportCode = airport.code;
      return Flight.create({
        originAirportId,
        originAirport,
        originAirportCode,
        destinationAirportId,
        destinationAirport,
        destinationAirportCode,
        startTime,
        price,
        seats,
      });
    })

    .then((flight) => {
      return res.status(200).json(flight);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports.getFlights = (req, res, next) => {
  return Flight.find()
    .then((flight) => {
      return res.status(200).json(flight);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports.replaceFlight = (req, res, next) => {
  const { flightId } = req.params;
  return Flight.findById(flightId)
    .then((flight) => {
      if (!flight) {
        return Promise.reject({
          status: 404,
          message: "Flight not found",
        });
      }
      Object.keys(Flight.schema.obj).forEach((key) => {
        flight[key] = req.body[key];
      });
      return flight.save();
    })
    .then((flight) => {
      return res.status(200).json(flight);
    })
    .catch((err) => {
      return res.status(err.status).json(err);
    });
};

module.exports.updateFlight = (req, res, next) => {
  const { flightId } = req.params;
  return Flight.findById(flightId)
    .then((flight) => {
      if (!flight) {
        return Promise.reject({
          status: 404,
          message: "Flight not found",
        });
      }
      Object.keys(Flight.schema.obj).forEach((key) => {
        if (req.body[key]) {
          flight[key] = req.body[key];
        }
      });
      return flight.save();
    })
    .then((flight) => {
      return res.status(200).json(flight);
    })
    .catch((err) => {
      return res.status(err.status).json(err);
    });
};

module.exports.getFlightDetail = (req, res, next) => {
  const { flightId } = req.params;
  return Flight.findById(flightId)
    .then((flight) => {
      if (!flight) {
        return Promise.reject({
          status: 404,
          message: "Flight not found",
        });
      }
      return res.status(200).json(flight);
    })
    .catch((err) => {
      return res.status(err.status).json(err);
    });
};

module.exports.deleteFlight = (req, res, next) => {
  const { flightId } = req.params;
  let _flight;
  return Flight.findById(flightId)
    .then((flight) => {
      if (!flight) {
        return Promise.reject({
          status: 404,
          message: "Flight not found",
        });
      }
      _flight = flight;
      return flight.deleteOne();
    })
    .then(() => {
      return res.status(200).json(_flight);
    })
    .catch((err) => {
      return res.status(err.status).json(err);
    });
};
