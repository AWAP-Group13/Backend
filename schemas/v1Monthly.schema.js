const mongoose = require("mongoose");
const { Schema } = mongoose;

const V1MonthlySchema = new Schema({
  timeInMonths: Date,
  globalMonthlyAnnual  : Number,
  southernHemisphereMonthlyAnnual: Number,
  northerHemisphereMonthlyAnnual: Number,
});

const V1Monthly = mongoose.model("V1Monthly", V1MonthlySchema);

module.exports = V1Monthly;
