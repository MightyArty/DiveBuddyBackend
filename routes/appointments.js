const express = require("express");

const {
  createAppointment,
  getAppointments,
} = require("../controllers/appointmentController");

const router = express.Router();

//get all appointments  http://localhost:4000/api/appointments/ method GET
router.get("/", getAppointments);

//create new appointment  http://localhost:4000/api/appointments/ method POST
router.post("/", createAppointment);

module.exports = router;
