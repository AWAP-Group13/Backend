const mongoose = require("mongoose");
const { Schema } = mongoose;

const V1MonthlySchema = new Schema({
  timeInMonths: Date,
  globalMonthlyAnnual  : Number,
  southernHemisphereMonthlyAnnual: Number,
  northerHemisphereMonthlyAnnual: Number,
});

const V1Monthly = mongoose.model("V1Monthly", V1MonthlySchema);

module.exports = V1Monthly;

/*
//const Vostok_co2_Data = require("../schemas/vostok_co2_data_v5.schema");

const getVostok_co2_DataStats = async (req, res) => {
  try {
    const stats = await Vostok_co2_Data.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

getVostok_co2_DataStats
*/
