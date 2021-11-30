const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/users");

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
exports.router = router;
