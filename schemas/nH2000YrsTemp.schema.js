const mongoose = require("mongoose");
const { Schema } = mongoose;

const NH2000YrsTempSchema = new Schema({
  timeInAnnual : Number,
  globalAnnual: Number,
  southernHemisphereAnnual: Number,
  northerHemisphereAnnual: Number,
});

const NH2000YrsTemp = mongoose.model("NH2000YrsTemp", NH2000YrsTempSchema);

module.exports = NH2000YrsTemp;