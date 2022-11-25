const V1Monthly = require("../schemas/v1Monthly.schema");
const V1Annually = require("../schemas/v1Annually.schema");
const NH2000YrsTemp = require("../schemas/nH2000YrsTemp.schema");
const MaunaLoaCO2Monthly = require("../schemas/maunaLoaCO2Monthly.schema");
const MaunaLoaCO2Annullay = require("../schemas/maunaLoaCO2Annullay.schema");

async function getV1MonthlyStats(req, res) {
  try {
    const stats = await V1Monthly.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
}

const getV1AnnuallyStats = async (req, res) => {
  try {
    const stats = await V1Annually.find();
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

const getMaunaLoaCO2AnnullayStats = async (req, res) => {
  try {
    const stats = await MaunaLoaCO2Annullay.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getMaunaLoaCO2MonthlyStats = async (req, res) => {
  try {
    const stats = await MaunaLoaCO2Monthly.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

module.exports = { getV1MonthlyStats, getV1AnnuallyStats, getNH2000YrsTempStats, 
                   getMaunaLoaCO2AnnullayStats, getMaunaLoaCO2MonthlyStats};
