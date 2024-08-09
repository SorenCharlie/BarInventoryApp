const express = require("express");
const router = express.Router();
const drinkController = require("../controllers/drinkController");

router.get("/", drinkController.getAllDrinks);
router.post("/", drinkController.createDrink);
router.get("/:id", drinkController.getDrinkById);
router.put("/:id", drinkController.updateDrink);
router.delete("/:id", drinkController.deleteDrink);

module.exports = router;
