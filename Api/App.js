const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World Junior XD");
});

app.listen(3000);
