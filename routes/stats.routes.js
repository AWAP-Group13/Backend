const express = require("express");
const {
  getV1MonthlyStats,
  getV1AnnuallyStats,
  getNH2000YrsTempStats,
  getV3MonthlyStats,
  getV3AnnuallyStats,
  getDE08_DataStats,
  getDE08_02_DataStats,
  getDSS_DataStats,
  getVostok_co2_DataStats,
  getV6Stats,
  getsurfaceTempV7Stats,
  getco2DataV7Stats,
  getV8Stats,
  getV9SectorStats,
} = require("../controllers/stats.controller");

const router = express.Router();
router.get("/v1Monthly", getV1MonthlyStats);
router.get("/v1Annually", getV1AnnuallyStats);
router.get("/v2", getNH2000YrsTempStats);
router.get("/v3Monthly", getV3MonthlyStats);
router.get("/v3Annually", getV3AnnuallyStats);
router.get("/v4DE08", getDE08_DataStats);
router.get("/v4DE08_02", getDE08_02_DataStats);
router.get("/v4DSS", getDSS_DataStats);
router.get("/v5", getVostok_co2_DataStats);
router.get("/v6", getV6Stats);
router.get("/v7surfaceTemp", getsurfaceTempV7Stats);
router.get("/v7co2Data", getco2DataV7Stats);
router.get("/v8", getV8Stats);
router.get("/v9Sector", getV9SectorStats);


module.exports = router;
