const express = require("express");
const router = express.Router();

router.route("/signup").get((req, res) => {
  res.send("hello sign up");
});

exports.router = router;
