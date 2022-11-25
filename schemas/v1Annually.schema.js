const mongoose = require("mongoose");
const { Schema } = mongoose;

const V1AnnuallySchema = new Schema({
  timeInAnnual : Number,
  globalAnnual: Number,
  southernHemisphereAnnual: Number,
  northerHemisphereAnnual: Number,
});

const V1Annually = mongoose.model("V1Annually", V1AnnuallySchema);

module.exports = V1Annually;
