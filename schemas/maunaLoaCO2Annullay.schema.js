const mongoose = require("mongoose");
const { Schema } = mongoose;

const MaunaLoaCO2AnnullaySchema = new Schema({
  time : Number,
  mean : Number,
});

const MaunaLoaCO2Annullay = mongoose.model("MaunaLoaCO2Annullay", MaunaLoaCO2AnnullaySchema);

module.exports = MaunaLoaCO2Annullay;
