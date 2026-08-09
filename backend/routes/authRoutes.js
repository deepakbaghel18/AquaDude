const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Route Working");
});

const { loginAdmin } = require("../controllers/authController");

router.post("/login", loginAdmin);

module.exports = router;