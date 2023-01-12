const express = require("express");

const { createDive, getDives } = require("../controllers/diveController");

const router = express.Router();

router.get("/", getDives);
router.post("/", createDive);

module.exports = router;
