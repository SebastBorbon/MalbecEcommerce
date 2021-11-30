const mongoose = require("mongoose");

//I setup the dnfo nedeed to connect with te database on mongo
const url = `mongodb://admin:admin@localhost:27017/malbecDB`;
//TODO CONNECT THE DB TO DOCKER
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
