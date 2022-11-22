const express = require("express");
const { getV1Stats } = require("../controllers/stats.controller");

const router = express.Router();
router.get("/v1", getV1Stats);

module.exports = router;
