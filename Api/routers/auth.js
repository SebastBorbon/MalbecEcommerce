const express = require("express");
const router = express.Router();
const { registerUser, checkUserCredentials } = require("../controllers/users");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/user");

router.route("/signup").get((req, res) => {
  res.send("hello sign up");
});

router.route("/signup").post(async (req, res) => {
  console.log(req.body);
  const { userName, password } = req.body;
  try {
    if (req.body) {
      await registerUser(userName, password);
      res.send("user registred");
    } else {
      res.status(404).send({ message: "ta mal el user" });
    }
  } catch (err) {
    res.status(404).send({ message: "ta mal" });
  }
});

router.route("/login").post(async (req, res) => {
  const { userName, password } = req.body;
  try {
    let user = await checkUserCredentials(userName, password);
    console.log(user);
    //if all the user data is correct, we send back the user
    if (user) {
      const token = jwt.sign({ userName: user.userName }, "secretPassword");
      res.status(200).json({ token });
    } else {
      res.status(400).send({ message: "incorrect Password" });
    }
  } catch (err) {
    res.status(404).send({ message: "connecting to DB" });
  }
});

exports.router = router;
