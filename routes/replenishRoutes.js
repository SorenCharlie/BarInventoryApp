const express = require("express");
const router = express.Router();
const { Ingredient } = require("../models");

const originalQuantities = {
  1: 100, // Jack Daniels
  2: 200, // Coca-Cola
  3: 100, // Tequila
  4: 50, // Triple Sec
  5: 100, // Lime Juice
  6: 500, // Salt
  7: 200, // Mint Leaves
  8: 100, // White Rum
  9: 100, // Sugar Syrup
  10: 100, // Gin
  11: 200, // Tonic Water
};

router.post("/:id", async (req, res) => {
  const ingredientId = req.params.id;
  const originalQuantity = originalQuantities[ingredientId];

  if (!originalQuantity) {
    return res.status(400).json({ error: "Invalid ingredient ID" });
  }

  try {
    await Ingredient.update(
      { quantity: originalQuantity },
      { where: { id: ingredientId } }
    );
    res.status(200).json({ message: "Ingredient replenished successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to replenish ingredient" });
  }
});

module.exports = router;
