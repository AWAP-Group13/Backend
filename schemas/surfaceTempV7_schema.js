const mongoose = require("mongoose");
const { Schema } = mongoose;

const surfaceTempV7Schema = new Schema({
  time: Number,
  temperature: Number,
});

const surfaceTempV7 = mongoose.model(
  "surfaceTempV7",
  surfaceTempV7Schema,
  "surfaceTempV7"
);

module.exports = surfaceTempV7;
