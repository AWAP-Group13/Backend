const mongoose = require("mongoose");
const { Schema } = mongoose;

const Vostok_co2_DataSchema = new Schema({
  time : Number,
  co2: Number,
});

const Vostok_co2_Data = mongoose.model("Vostok_co2_Data", Vostok_co2_DataSchema);

module.exports = Vostok_co2_Data;