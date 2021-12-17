const express = require("express");

const router = express.Router();
const {
  verifyToken,
  verifyAuthorization,
  verifyAdmin,
} = require("../middlewares/verifyToken");
const Order = require("../models/Order");

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get orders

router.get("/", verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE order
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete user orders
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET user orders
router.get("/find/:userId", verifyAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET monthly income
router.get("/income", verifyAdmin, async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth }, ...(productId &&{
        products:{$elementMatch:{productId}}
      }) } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.router = router;
