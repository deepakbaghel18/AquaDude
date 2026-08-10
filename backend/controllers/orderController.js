const Order = require("../models/Order");

// ==============================
// Create Order
// ==============================
const createOrder = async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      product,
      quantity,
      price,
    } = req.body;

    const totalPrice = quantity * price;

    // Generate customer-friendly Order ID
    const orderId =
      "AQUA-" +
      Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

    const order = await Order.create({
      orderId,
      name,
      phone,
      address,
      product,
      quantity,
      price,
      totalPrice,
    });

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get All Orders
// ==============================
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get Single Order
// ==============================
const getOrderById = async (req, res) => {
  try {
    // First try the customer-friendly Order ID
    let order = await Order.findOne({
      orderId: req.params.id,
    });

    // If not found, try the old MongoDB ID
    if (!order) {
      order = await Order.findById(req.params.id);
    }

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Update Order Status
// ==============================
const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: "Delivered",
      },
      {
        new: true,
      }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order Delivered Successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Delete Order
// ==============================
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Export
// ==============================
module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
};