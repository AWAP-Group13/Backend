const V1Monthly = require("../schemas/v1Monthly.schema");
const V1Annually = require("../schemas/v1Annually.schema");
const NH2000YrsTemp = require("../schemas/nH2000YrsTemp.schema");
const MaunaLoaCO2Monthly = require("../schemas/maunaLoaCO2Monthly.schema");
const MaunaLoaCO2Annullay = require("../schemas/maunaLoaCO2Annullay.schema");
const DE08_Data = require("../schemas/de08_Data_v4.schema");
const DE08_02_Data = require("../schemas/de08-02_Data_v4.schema");
const DSS_Data = require("../schemas/dss_Data_v4.schema");
const Vostok_co2_Data = require("../schemas/vostok_co2_data_v5.schema");


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

const getDE08_DataStats = async (req, res) => {
  try {
    const stats = await DE08_Data.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getDE08_02_DataStats = async (req, res) => {
  try {
    const stats = await DE08_02_Data.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getDSS_DataStats = async (req, res) => {
  try {
    const stats = await DSS_Data.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getVostok_co2_DataStats = async (req, res) => {
  try {
    const stats = await Vostok_co2_Data.find();
    console.log(stats);
    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

module.exports = { getV1MonthlyStats, getV1AnnuallyStats, getNH2000YrsTempStats, 
                   getMaunaLoaCO2AnnullayStats, getMaunaLoaCO2MonthlyStats,getDE08_DataStats,
                   getDE08_02_DataStats, getDSS_DataStats, getVostok_co2_DataStats };
