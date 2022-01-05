const express = require("express");
const router = express.Router();
const { verifyAdmin } = require("../middlewares/verifyToken");
const Product = require("../models/Product");

router.post("/", verifyAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.json("product created");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyAdmin, async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  try {
    let products;
    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCategory) {
      products = await Product.find({
        category: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.router = router;
