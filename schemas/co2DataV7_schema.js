const mongoose = require("mongoose");
const { Schema } = mongoose;

const co2DataV7Schema = new Schema({
  time: Number,
  Co2: Number,
});

const co2DataV7 = mongoose.model("co2DataV7", co2DataV7Schema, "co2DataV7");

module.exports = co2DataV7;
