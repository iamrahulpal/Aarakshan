// app.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const patientRoutes = require("./routes/patient.route");
const appointmentRoutes = require("./routes/appointment.route");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

db.sequelize.sync();

app.use("/api/patient", patientRoutes);
app.use("/api/appointment", appointmentRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
