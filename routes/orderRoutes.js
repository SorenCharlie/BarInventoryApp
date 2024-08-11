const express = require("express");
const router = express.Router();
const { getOrderData, orderDrink } = require("../controllers/orderController");

router.get("/", (req, res) => {
  res.render("order");
});

router.post("/", orderDrink);

router.get("/data", getOrderData);

module.exports = router;
