const V1Monthly = require("../schemas/v1Monthly.schema");
const V1Annually = require("../schemas/v1Annually.schema");
const NH2000YrsTemp = require("../schemas/nH2000YrsTemp.schema");
const V3Monthly = require("../schemas/v3Monthly");
const V3Annually = require("../schemas/v3Annually");
const DE08_Data = require("../schemas/de08_Data_v4.schema");
const DE08_02_Data = require("../schemas/de08-02_Data_v4.schema");
const DSS_Data = require("../schemas/dss_Data_v4.schema");
const Vostok_co2_Data = require("../schemas/vostok_co2_data_v5.schema");
const V6 = require("../schemas/v6.schema");
const surfaceTempV7 = require("../schemas/surfaceTempV7.schema");
const co2DataV7 = require("../schemas/co2DataV7.schema");
const V8 = require("../schemas/v8.schema");

async function getV1MonthlyStats(req, res) {
  try {
    const stats = await V1Monthly.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
}

const getV1AnnuallyStats = async (req, res) => {
  try {
    const stats = await V1Annually.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getNH2000YrsTempStats = async (req, res) => {
  try {
    const stats = await NH2000YrsTemp.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getV3AnnuallyStats = async (req, res) => {
  try {
    const stats = await V3Annually.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getV3MonthlyStats = async (req, res) => {
  try {
    const stats = await V3Monthly.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getDE08_DataStats = async (req, res) => {
  try {
    const stats = await DE08_Data.find().sort([["time", 1]]);

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getDE08_02_DataStats = async (req, res) => {
  try {
    const stats = await DE08_02_Data.find().sort([["time", 1]]);

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getDSS_DataStats = async (req, res) => {
  try {
    const stats = await DSS_Data.find().sort([["time", 1]]);

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getVostok_co2_DataStats = async (req, res) => {
  try {
    const stats = await Vostok_co2_Data.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getV6Stats = async (req, res) => {
  try {
    const stats = await V6.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getsurfaceTempV7Stats = async (req, res) => {
  try {
    const stats = await surfaceTempV7.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getco2DataV7Stats = async (req, res) => {
  try {
    const stats = await co2DataV7.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};

const getV8Stats = async (req, res) => {
  try {
    const stats = await V8.find();

    res.status(200).send({ status: "success", data: stats });
  } catch (error) {
    res.status(400).send({ status: "error", error: error.message });
  }
};


module.exports = {
  getV1MonthlyStats,
  getV1AnnuallyStats,
  getNH2000YrsTempStats,
  getV3AnnuallyStats,
  getV3MonthlyStats,
  getDE08_DataStats,
  getDE08_02_DataStats,
  getDSS_DataStats,
  getVostok_co2_DataStats,
  getV6Stats,
  getsurfaceTempV7Stats,
  getco2DataV7Stats,
  getV8Stats,
};
