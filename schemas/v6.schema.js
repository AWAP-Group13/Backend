const mongoose = require("mongoose");
const { Schema } = mongoose;

const V6Schema = new Schema({
  time: String,
  CO2Measurement: Number,
});

const V6 = mongoose.model("V6", V6Schema, "V6");

module.exports = V6;
