const mongoose = require("mongoose");
const { Schema } = mongoose;

const V1AnnualySchema = new Schema({
  timeInAnnual : Number,
  globalAnnual: Number,
  southernHemisphereAnnual: Number,
  northerHemisphereAnnual: Number,
});

const V1Annualy = mongoose.model("V1Annualy", V1AnnualySchema);

module.exports = V1Annualy;
