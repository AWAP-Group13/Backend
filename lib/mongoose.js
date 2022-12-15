const mongoose = require("mongoose");

const initMongoose = () => {
  mongoose
    .connect(process.env.MONGO_URL, function (err) {
      if (err) console.log(err);
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};

module.exports = initMongoose;
