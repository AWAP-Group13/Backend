const mongoose = require("mongoose");
const { Schema } = mongoose;

const V1MonthlySchema = new Schema({
  timeInMonths: String,
  globalMonthlyAnnual: Number,
  southernHemisphereMonthlyAnnual: Number,
  northerHemisphereMonthlyAnnual: Number,
});

const V1Monthly = mongoose.model("V1Monthly", V1MonthlySchema, "V1Monthly");

module.exports = V1Monthly;
