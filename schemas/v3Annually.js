const mongoose = require("mongoose");
const { Schema } = mongoose;

const V3AnnuallySchema = new Schema({
  time: Number,
  annualCO2Measurement: Number,
});

const V3Annually = mongoose.model("V3Annually", V3AnnuallySchema, "V3Annually");

module.exports = V3Annually;
