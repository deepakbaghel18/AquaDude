require("dotenv").config();

const mongoose = require("mongoose");
const Order = require("./models/Order");

const generateOrderId = () => {
  return (
    "AQUA-" +
    Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()
  );
};

const addOrderIds = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    const orders = await Order.find({
      $or: [
        { orderId: { $exists: false } },
        { orderId: null },
        { orderId: "" },
      ],
    });

    console.log(`Found ${orders.length} orders without Order ID`);

    for (const order of orders) {
      order.orderId = generateOrderId();
      await order.save();

      console.log(
        `${order._id} → ${order.orderId}`
      );
    }

    console.log("✅ Order IDs added successfully");

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

addOrderIds();