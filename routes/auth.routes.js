const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kdekurevgftojtdh1995kgfdeeeesxayywrsvcvxg";

const User = require("../schemas/UserInformation");

const router = express.Router();

// POST /auth/register
router.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body.data;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    User.findOne({ email }, async function (err, result) {
      if (err) throw err;
      if (!result) {
        var user = new User({
          fname,
          lname,
          email,
          password: encryptedPassword,
        });

        console.log(user);

        try {
          await user.save();
          return res.json({ status: "Success" });
        } catch (error) {
          console.log(error);
          return res.json({ status: "error" });
        }
      } else {
        return res.json({ status: "User exists already" });
      }
    });
  } catch (error) {
    console.log(error);
    res.send({ status: "Error" });
  }
});

//Login API : POST /auth/login-user
router.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  //Checking if a user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User is not found" });
  }

  //Decrypting the password
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "Success", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Incorrect password" });
});

//An API for to display user data after successful login.
//POST /auth/userData
router.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userEmail = user.email;
    User.findOne({ email: userEmail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        console.log(error);
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    console.log(error);
    res.send({ status: "error", data: error });
  }
});

module.exports = router;
