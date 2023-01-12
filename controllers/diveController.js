const Dive = require("../models/diveModel");

const getDives = async (req, res) => {
  try {
    const dives = await Dive.find({}).populate("user").sort({ createdAt: -1 });
    res.status(200).json({ messg: "dives fetched successfuly", dives });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDive = async (req, res) => {
  const { date, site, equipment, duration, depth, note } = req.body;
  try {
    const dive = await Dive.create({
      date,
      site,
      equipment,
      duration,
      depth,
      note,
    });
    res.status(200).json({ messg: "dive created successfuly", dive });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDive,
  getDives,
};
