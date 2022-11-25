const mongoose = require("mongoose");
const { Schema } = mongoose;

const NH2000YrsTempSchema = new Schema({
  time : Number,
  temperature : Number,
});

const NH2000YrsTemp = mongoose.model("NH2000YrsTemp", NH2000YrsTempSchema);

module.exports = NH2000YrsTemp;