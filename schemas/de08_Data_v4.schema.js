const mongoose = require("mongoose");
const { Schema } = mongoose;

const DE08_DataSchema = new Schema({
  time: Number,
  co2: Number,
});

const DE08_Data = mongoose.model("DE08_Data", DE08_DataSchema, "DE08_Data");

module.exports = DE08_Data;
