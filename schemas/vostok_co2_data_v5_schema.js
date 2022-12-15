const mongoose = require("mongoose");
const { Schema } = mongoose;

const Vostok_co2_DataSchema = new Schema({
  time: Number,
  co2_measurements: Number,
});

const Vostok_co2_Data = mongoose.model(
  "Vostok_co2_Data",
  Vostok_co2_DataSchema,
  "Vostok_co2_Data"
);

module.exports = Vostok_co2_Data;
