const mongoose = require("mongoose");
const { Schema } = mongoose;

const MaunaLoaCO2MonthlySchema = new Schema({
  time : Number,
  mean : Number,
});

const MaunaLoaCO2Monthly = mongoose.model("MaunaLoaCO2Monthly", MaunaLoaCO2MonthlySchema);

module.exports = MaunaLoaCO2Monthly;