const mongoose = require("mongoose");
const { Schema } = mongoose;

const V3MonthlySchema = new Schema({
  time: String,
  monthlyCO2Measurement: Number,
});

const V3Monthly = mongoose.model("V3Monthly", V3MonthlySchema, "V3Monthly");

module.exports = V3Monthly;
