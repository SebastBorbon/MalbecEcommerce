const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  price: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
    default: "Preparing",
  },
  items: [Object],
});

const Orders = mongoose.model("Orders", OrdersSchema, "orders");

module.exports = Orders;
