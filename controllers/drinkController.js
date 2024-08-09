const { Drink } = require("../models");

// Get all drinks
exports.getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drink.findAll();
    res.json(drinks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new drink
exports.createDrink = async (req, res) => {
  try {
    const { name, type, brand, price } = req.body;
    const newDrink = await Drink.create({ name, type, brand, price });
    res.status(201).json(newDrink);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a drink by ID
exports.getDrinkById = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await Drink.findByPk(id);
    if (drink) {
      res.json(drink);
    } else {
      res.status(404).json({ error: "Drink not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a drink by ID
exports.updateDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, brand, price } = req.body;
    const [updated] = await Drink.update(
      { name, type, brand, price },
      { where: { id } }
    );
    if (updated) {
      const updatedDrink = await Drink.findByPk(id);
      res.json(updatedDrink);
    } else {
      res.status(404).json({ error: "Drink not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a drink by ID
exports.deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Drink.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Drink not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
