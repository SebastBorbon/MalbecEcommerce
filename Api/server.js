const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 3000;
const authRoutes = require("./routers/auth").router;
const userRoutes = require("./routers/user").router;
const productRoutes = require("./routers/product").router;
const cartRoutes = require("./routers/cart").router;
const orderRoutes = require("./routers/order").router;
const stripeRoutes = require("./routers/stripe").router;
require("./database.js");

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World ");
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoutes);

app.listen(port, () => {
  console.log("server started at port 3000");
});
