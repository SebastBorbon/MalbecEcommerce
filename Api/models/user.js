const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      require: true,
      type: String,
      unique: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    address: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
