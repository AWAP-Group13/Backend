const V1Monthly = require("../schemas/v1Monthly.schema");
const V1Annualy = require("../schemas/v1Annualy.schema");
const NH2000YrsTemp = require("../schemas/nH2000YrsTemp.schema");

async function getV1MonthlyStats(req, res) {
  try {
    const stats = await V1Monthly.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
}

const getV1AnnualyStats = async (req, res) => {
  try {
    const stats = await V1Annualy.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getNH2000YrsTempStats = async (req, res) => {
  try {
    const stats = await NH2000YrsTemp.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

module.exports = { getV1MonthlyStats, getV1AnnualyStats, getNH2000YrsTempStats };
