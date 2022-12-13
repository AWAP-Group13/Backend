const mongoose = require("mongoose");

const UserInformationSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("UserInfo", UserInformationSchema, "UserInfo");
