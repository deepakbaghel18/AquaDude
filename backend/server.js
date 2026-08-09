const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// =======================
// Connect Database
// =======================
connectDB();

// =======================
// Middleware
// =======================
app.use(cors());
app.use(express.json());

// =======================
// Routes
// =======================
app.get("/", (req, res) => {
  res.send("🚀 AquaDude Backend Running");
});

// Orders API
app.use("/api/orders", orderRoutes);

// Admin Login API
app.use("/api/auth", authRoutes);

console.log("Auth routes loaded");

// =======================
// Start Server
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});