const mongoose = require("mongoose");
const { Schema } = mongoose;

const DSS_DataSchema = new Schema({
  time: Number,
  co2: Number,
});

const DSS_Data = mongoose.model("DSS_Data", DSS_DataSchema, "DSS_Data");

module.exports = DSS_Data;
