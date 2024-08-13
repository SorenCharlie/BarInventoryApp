const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const testValue = 7; // Replace with dynamic data if needed
    res.render("charts", { test: testValue });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
