const bcrypt = require("bcrypt");

const registerUser = async (username, password) => {
  let hashedPwd = await bcrypt.hash(password, 10);
};
const getUser = (userId) => {};
const checkUserCredentials = (email, password) => {};

module.exports = {
  registerUser,
  getUser,
  checkUserCredentials,
};
