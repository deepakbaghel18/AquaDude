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

    const order = await Order.create({
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
    await Order.findByIdAndDelete(req.params.id);

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
  updateOrderStatus,
  deleteOrder,
};