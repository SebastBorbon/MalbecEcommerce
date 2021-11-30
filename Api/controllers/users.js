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
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};
const getUser = (userId) => {};
const checkUserCredentials = (email, password) => {};

module.exports = {
  registerUser,
  getUser,
  checkUserCredentials,
};
