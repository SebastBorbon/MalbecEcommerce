const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const newUser = new User({
    username: req.body.userName,
    email: req.body.email,
    address: req.body.address,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRETPASS
    ).toString(),
  });
  try {
    await newUser.save();
    res.status(201).json("new user created");
  } catch (err) {
    res.status(500).json("failed the signup");
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ username: req.body.userName });
    if (!user) return res.status(401).json("Wrong credentials");

    const hashedPwd = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRETPASS,
      { expiresIn: "1d" }
    );
    let ogPassword = hashedPwd.toString(CryptoJS.enc.Utf8);
    if (ogPassword !== req.body.password)
      return res.status(401).json("Wrong credentials");
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY
    );
    const { password, ...others } = user._doc;
    res.json({ ...others, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed the login" });
  }
});

exports.router = router;
