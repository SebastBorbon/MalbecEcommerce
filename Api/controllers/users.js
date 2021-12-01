const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const UserModel = mongoose.model("UserModel", {
  userName: String,
  password: String,
});

const registerUser = async (userName, password) => {
  try {
    let hashedPwd = await bcrypt.hash(password, 10);
    let newUser = new UserModel({
      userName: userName,
      password: hashedPwd,
    });
    await newUser.save().then(() => {
      console.log("todo bien rey");
    });
  } catch (err) {
    console.log(err);
  }
};
const getUser = (userId) => {};

const getUserIdFromEmail = async (email) => {
  try {
    let userByName = await UserModel.findOne({ userName: email });
    if (!userByName) {
      res.status(404).send({ message: "incorrect username" });
    } else {
      return userByName;
    }
  } catch {}
};

const checkUserCredentials = async (email, password) => {
  //check user and compare the password with the hashed one saved in the DB
  try {
    let user = await getUserIdFromEmail(email);
    if (user) {
      let userPassword = await bcrypt.compare(password, user.password);
      if (userPassword) {
        return user;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerUser,
  getUser,
  checkUserCredentials,
};
