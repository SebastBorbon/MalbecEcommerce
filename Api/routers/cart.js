const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyAuthorization,
  verifyAdmin,
} = require("../middlewares/verifyToken");
const Cart = require("../models/Cart");

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update the cart
router.put("/:id", verifyAuthorization, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updateCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE the cart
router.delete("/:id", verifyAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET user cart
router.get("/find/:userId", verifyAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all carts
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});
exports.router = router;
