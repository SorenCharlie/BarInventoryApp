const express = require("express");
const router = express.Router();
const { Ingredient } = require("../models");

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    console.log(ingredients);
    res.render("ingredients", {
      ingredients: ingredients.map((ingredient) =>
        ingredient.get({ plain: true })
      ),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const ingredientController = require("../controllers/ingredientController");
router.post("/", ingredientController.createIngredient);
router.get("/:id", ingredientController.getIngredientById);
router.put("/:id", ingredientController.updateIngredient);
router.delete("/:id", ingredientController.deleteIngredient);

module.exports = router;
