const { DrinkIngredient } = require("../models");

// Get all drink ingredients
exports.getAllDrinkIngredients = async (req, res) => {
  try {
    const drinkIngredients = await DrinkIngredient.findAll();
    res.json(drinkIngredients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new drink ingredient
exports.createDrinkIngredient = async (req, res) => {
  try {
    const { drinkId, ingredientId, quantity } = req.body;
    const newDrinkIngredient = await DrinkIngredient.create({
      drinkId,
      ingredientId,
      quantity,
    });
    res.status(201).json(newDrinkIngredient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a drink ingredient by ID
exports.getDrinkIngredientById = async (req, res) => {
  try {
    const { id } = req.params;
    const drinkIngredient = await DrinkIngredient.findByPk(id);
    if (drinkIngredient) {
      res.json(drinkIngredient);
    } else {
      res.status(404).json({ error: "DrinkIngredient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a drink ingredient by ID
exports.updateDrinkIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const { drinkId, ingredientId, quantity } = req.body;
    const [updated] = await DrinkIngredient.update(
      { drinkId, ingredientId, quantity },
      { where: { id } }
    );
    if (updated) {
      const updatedDrinkIngredient = await DrinkIngredient.findByPk(id);
      res.json(updatedDrinkIngredient);
    } else {
      res.status(404).json({ error: "DrinkIngredient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a drink ingredient by ID
exports.deleteDrinkIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DrinkIngredient.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "DrinkIngredient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
