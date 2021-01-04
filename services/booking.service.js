const { Seat } = require("./../models/seat.model");
const { Booking } = require("./../models/booking.model");
const { Flight } = require("./../models/flight.model");
const { Airport } = require("./../models/airport.model");

module.exports.createBooking = (req, res, next) => {
  const userId = req.user._id;
  const { flightId, seats } = req.body;
  Flight.findById(flightId)
    .then((flight) => {
      if (!flight)
        return Promise.reject({
          message: "flight not found",
          status: 404,
        });
      const availableSeats = flight.seats
        .filter((seat) => !seat.isBooked)
        .map((seat) => seat.code);

      const errSeats = [];

      seats.forEach((seat) => {
        if (availableSeats.indexOf(seat) === -1) errSeats.push(seat);
      });

      if (errSeats.length > 0)
        return Promise.reject({
          message: `Seats ${errSeats.join(", ")} are not available`,
          status: 400,
        });
      seats.forEach((code) => {
        const index = flight.seats.findIndex((seat) => seat.code === code);
        flight.seats[index].isBooked = true;
      });

      return Promise.all([
        Booking.create({
          flightId,
          from: flight.originAirport,
          to: flight.destinationAirport,
          time: flight.startTime,
          bookedBy: userId,
          seats: seats.map((code) => new Seat({ code, isBooked: true })),
          totalPrice: seats.length * flight.price,
        }),
        flight.save(),
      ]);
    })
    .then((result) => {
      const [booking, flight] = result;
      return res.status(200).json(booking);
    })
    .catch((err) => res.status(err.status || 500).json(err));
};

module.exports.getBookings = (req, res, next) => {
  Booking.find()
    .then((booking) => {
      if (!booking)
        return Promise.reject({
          message: "Booking not found",
          status: 404,
        });
      return res.status(200).json(booking);
    })
    .catch((err) => res.status(err.status).json(err));
};

module.exports.getBookingsByUser = (req, res, next) => {
  const userId = req.user._id;
  Booking.find({ bookedBy: userId })
    .then((booking) => {
      return res.status(200).json(booking);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.updateBooking = (req, res, next) => {
  const bookingId = req.params;
  Booking.findById(bookingId)
    .then((booking) => {
      if (!booking)
        return Promise.reject({
          message: "Booking not found",
          status: 404,
        });
      Object.keys(Booking.schema.obj).forEach((key) => {
        if (req.body[key]) {
          booking[key] = req.body.key;
        }
      });
      return booking.save();
    })
    .then((booking) => res.status(200).json(booking))
    .catch((err) => res.status(status.err).json(err));
};
