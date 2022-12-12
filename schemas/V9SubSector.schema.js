const mongoose = require("mongoose");
const { Schema } = mongoose;

const V9SubSectorSchema = new Schema({
  sector: String,
  co2: Number,
});

const V9SubSector = mongoose.model("V9SubSector", V9SubSectorSchema, "V9SubSector");

module.exports = V9SubSector;