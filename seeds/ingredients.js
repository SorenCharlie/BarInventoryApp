const { Ingredient } = require('../models');

const ingredientData = [
  {
    name: "Jack Daniels",
    quantity: 100, // in units
  },
  {
    name: "Coca-Cola",
    quantity: 200, // in units
  },
 
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;

