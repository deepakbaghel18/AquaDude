const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("OK");
});

console.log("Router created successfully");