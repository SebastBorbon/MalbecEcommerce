const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: [],
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  color: {
    type: [],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Stock: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
