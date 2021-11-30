const express = require("express");
const authRoutes = require("./routers/auth").router;
const app = express();
require("./database.js"); // importa el archivo de conexión

const port = 3000;
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World ");
});
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log("server started at port 3000");
});
