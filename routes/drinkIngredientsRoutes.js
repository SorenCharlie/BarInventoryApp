const express = require("express");
const router = express.Router();
const drinkIngredientController = require("../controllers/drinkIngredientController");

router.get("/", drinkIngredientController.getAllDrinkIngredients);
router.post("/", drinkIngredientController.createDrinkIngredient);
router.get("/:id", drinkIngredientController.getDrinkIngredientById);
router.put("/:id", drinkIngredientController.updateDrinkIngredient);
router.delete("/:id", drinkIngredientController.deleteDrinkIngredient);

module.exports = router;
