const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World this is our new Malbec Page");
});

app.listen(3000);
