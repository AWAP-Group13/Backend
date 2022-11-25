const express = require("express");
const { getV1MonthlyStats, getV1AnnualyStats, getNH2000YrsTempStats } = require("../controllers/stats.controller");

const router = express.Router();
router.get("/v1Monthly", getV1MonthlyStats);
router.get("/v1Annualy", getV1AnnualyStats);
router.get("/v2", getNH2000YrsTempStats);




module.exports = router;


