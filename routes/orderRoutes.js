const express = require("express");
const router = express.Router();
const { orderDrink } = require("../controllers/orderController");

router.get("/", (req, res) => {
  res.render("order");
});

router.post("/", orderDrink);

module.exports = router;
