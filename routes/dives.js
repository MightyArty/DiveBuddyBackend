const express = require("express");

const {
  createDive,
  getDives,
  updateDive,
} = require("../controllers/diveController");

const router = express.Router();

router.get("/", getDives); // receive the data
router.post("/", createDive); // push the data to db
router.patch("/", updateDive); // update the data

module.exports = router;
