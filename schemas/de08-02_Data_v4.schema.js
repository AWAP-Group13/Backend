const mongoose = require("mongoose");
const { Schema } = mongoose;

const DE08_02_DataSchema = new Schema({
  time: Number,
  co2: Number,
});

const DE08_02_Data = mongoose.model(
  "DE08_02_Data",
  DE08_02_DataSchema,
  "DE08_02_Data"
);

module.exports = DE08_02_Data;
