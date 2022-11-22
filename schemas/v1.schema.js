const mongoose = require("mongoose");
const { Schema } = mongoose;

const V1Schema = new Schema({
  timeInMonths: Number,
  globalMonthlyAnnual  : Number,
  southernHemisphereMonthlyAnnual: Number,
  northerHemisphereMonthlyAnnual: Number,
  timeInAnnual : Number,
  globalAnnual: Number,
  southernHemisphereAnnual: Number,
  northerHemisphereAnnual: Number,
});

const V1 = mongoose.model("V1", V1Schema);

module.exports = V1;
