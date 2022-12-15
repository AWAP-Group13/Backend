const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const statsRoutes = require("./routes/stats_routes");
const authRoutes = require("./routes/auth_routes");
require("dotenv").config();

const app = express();

app.use(cors());

const initMongoose = require("./lib/mongoose");
initMongoose();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

app.use("/stats", statsRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Starting on port 4000");
});
