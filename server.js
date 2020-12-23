//Import
const mongoose = require("mongoose");
const express = require("express");
const config = require("./config");
const airportController = require("./controllers/airport.controller");
const flightController = require("./controllers/flight.controller");
const userController = require("./controllers/user.controller");
const bookingController = require("./controllers/booking.controller");

//Declaration
const PORT = process.env.PORT || 5000;

//Initiation
const app = express();
app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});

mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected tp MongoDB successfully");
  })
  .catch(console.log);

app.use(express.json());

app.use("/api", airportController);
app.use("/api", flightController);
app.use("/api", userController);
app.use("/api", bookingController);
