const { Ingredient } = require("../models");

// Get all ingredients
exports.getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new ingredient
exports.createIngredient = async (req, res) => {
  try {
    const { name } = req.body;
    const newIngredient = await Ingredient.create({ name });
    res.status(201).json(newIngredient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get an ingredient by ID
exports.getIngredientById = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findByPk(id);
    if (ingredient) {
      res.json(ingredient);
    } else {
      res.status(404).json({ error: "Ingredient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an ingredient by ID
exports.updateIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const [updated] = await Ingredient.update({ name }, { where: { id } });
    if (updated) {
      const updatedIngredient = await Ingredient.findByPk(id);
      res.json(updatedIngredient);
    } else {
      res.status(404).json({ error: "Ingredient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an ingredient by ID
exports.deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ingredient.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Ingredient not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
