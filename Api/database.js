import { connect } from "mongoose";

//I setup the dnfo nedeed to connect with te database on mongo
const url = `mongodb://mongo:27017/test`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
