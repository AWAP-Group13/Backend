const express = require("express");
const { getV1MonthlyStats, getV1AnnuallyStats, getNH2000YrsTempStats, getMaunaLoaCO2MonthlyStats,
    getMaunaLoaCO2AnnullayStats,getDE08_DataStats,getDE08_02_DataStats,getDSS_DataStats ,
    getVostok_co2_DataStats 
    } = require("../controllers/stats.controller");

const router = express.Router();
router.get("/v1Monthly", getV1MonthlyStats);
router.get("/v1Annually", getV1AnnuallyStats);
router.get("/v2", getNH2000YrsTempStats);
router.get("/v3Monthly", getMaunaLoaCO2MonthlyStats);
router.get("/v3Annually", getMaunaLoaCO2AnnullayStats)
router.get("/v4DE08", getDE08_DataStats);
router.get("/v4DE08_02", getDE08_02_DataStats);
router.get("/v4DSS", getDSS_DataStats);
router.get("/v5", getVostok_co2_DataStats);






module.exports = router;


