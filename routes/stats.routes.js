const express = require("express");
const { getV1MonthlyStats, getV1AnnuallyStats, getNH2000YrsTempStats, getMaunaLoaCO2MonthlyStats, getMaunaLoaCO2AnnullayStats } = require("../controllers/stats.controller");

const router = express.Router();
router.get("/v1Monthly", getV1MonthlyStats);
router.get("/v1Annually", getV1AnnuallyStats);
router.get("/v2", getNH2000YrsTempStats);
router.get("/v3Monthly", getMaunaLoaCO2MonthlyStats);
router.get("/v3Annually", getMaunaLoaCO2AnnullayStats)





module.exports = router;


