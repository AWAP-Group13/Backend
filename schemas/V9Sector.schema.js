const mongoose = require("mongoose");
const { Schema } = mongoose;

const V9SectorSchema = new Schema({
  Sector: String,
  co2: Number,
  forSector: String,
});

const V9Sector = mongoose.model("V9Sector", V9SectorSchema, "V9Sector");

module.exports = V9Sector;