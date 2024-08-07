const express = require("express");
const router = express.Router();
const { orderDrink } = require("../controllers/orderController");

router.post("/", orderDrink);

module.exports = router;
