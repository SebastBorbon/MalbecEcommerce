const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  lastname: {
    require: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  addres: {
    required: true,
    type: String,
  },
  status: {
    required: false,
    type: String,
    default: "regular",
  },
  order: {
    order: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
