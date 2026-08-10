const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

// Create Order
router.post("/", createOrder);

// Get All Orders
router.get("/", getOrders);

// Mark Order Delivered
router.put("/:id", updateOrderStatus);

// Delete Order
router.delete("/:id", deleteOrder);

module.exports = router;