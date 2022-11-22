const mongoose = require("mongoose");

const initMongoose = () => {
  mongoose.connect(process.env.MONGO_URL, function (err) {
    if (err) console.log(err);
  });
};

module.exports = initMongoose;
