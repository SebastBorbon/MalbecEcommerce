const express = require("express");
const router = express.Router();

// const UserModel = mongoose.model("UserModel", {
//   userName: String,
//   password: String,
// });

// function createNewUser() {
//   let newUser = new UserModel({
//     userName: "hola",
//     password: "primeruser",
//   });
//   return newUser;
// }
router.route("/signup").get((req, res) => {
  res.send("hello sign up");
});

router.route("/signup").post((req, res) => {});
exports.router = router;
