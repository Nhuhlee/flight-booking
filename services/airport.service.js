const { Airport } = require("./../models/airport.model");

module.exports.getAirport = (req, res, next) => {
  return Airport.find()
    .then((airport) => res.status(200).json(airport))
    .catch((err) => res.status(500).json(err));
};

module.exports.createAirport = (req, res, next) => {
  return Airport.create(req.body)
    .then((airport) => res.status(200).json(airport))
    .catch((err) => res.status(500).json(err));
};

module.exports.replaceAirport = (req, res, next) => {
  const { airportId } = req.params;
  return Airport.findById(airportId)
    .then((airport) => {
      if (!airport) {
        return Promise.reject({
          message: "Airport not found",
          status: 404,
        });
      }
      Object.keys(Airport.schema.obj).forEach((key) => {
        airport[key] = req.body[key];
      });
      return airport.save();
    })
    .then((airport) => res.status(200).json(airport))
    .catch((err) => res.status(err.status).json(err));
};

module.exports.updateAirport = (req, res, next) => {
  const { airportId } = req.params;
  return Airport.findById(airportId)
    .then((airport) => {
      if (!airport) {
        return Promise.reject({
          message: "Airport not found",
          status: 404,
        });
      }
      Object.keys(Airport.schema.obj).forEach((key) => {
        if (req.body[key]) {
          airport[key] = req.body[key];
        }
      });
      return airport.save();
    })
    .then((airport) => res.status(200).json(airport))
    .catch((err) => res.status(err.status).json(err));
};

module.exports.getAirportDetail = (req, res, next) => {
  const { airportId } = req.params;
  return Airport.findById(airportId)
    .then((airport) => {
      if (!airport) {
        return Promise.reject({
          message: "Airport not found",
          status: 404,
        });
      }
      console.log(airport.photo);
      return res.status(200).json(airport);
    })
    .catch((err) => res.status(err.status).json(err));
};

module.exports.deleteAirport = (req, res, next) => {
  const { airportId } = req.params;
  let _airport;
  return Airport.findById(airportId)
    .then((airport) => {
      if (!airport) {
        return Promise.reject({
          message: "Airport not found",
          status: 404,
        });
      }
      _airport = airport;
      return airport.deleteOne();
    })
    .then((deleted) => res.status(200).json(_airport))
    .catch((err) =>
      res.status(err.status).json({ message: "Failed to delete" })
    );
};

module.exports.uploadPhoto = (req, res, next) => {
  const { airportId } = req.body;
  Airport.findById(airportId)
    .then((airport) => {
      if (!airport)
        return Promise.reject({
          message: "Airport not found",
          status: 404,
        });
      airport.photo = req.file.path;
      return airport.save();
    })
    .then((airport) => res.status(200).json(airport))
    .catch((err) => res.status(err.status || 500).json(err));
};
