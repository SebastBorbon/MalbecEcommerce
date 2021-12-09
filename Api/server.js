const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
const authRoutes = require("./routers/auth").router;
const userRoutes = require("./routers/user").router;
const productRoutes = require("./routers/product").router;
require("./database.js");

dotenv.config();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World ");
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.listen(port, () => {
  console.log("server started at port 3000");
});
