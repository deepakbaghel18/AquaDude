const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    product: {
      type: String,
      required: true,
      default: "20L Alkaline Water",
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
    },

    price: {
      type: Number,
      required: true,
      default: 250,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);