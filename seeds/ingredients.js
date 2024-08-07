const { Ingredient } = require("../models");

const ingredientData = [
  {
    name: "Jack Daniels",
    quantity: 100, // in units
  },
  {
    name: "Coca-Cola",
    quantity: 200, // in units
  },
  {
    name: "Tequila",
    quantity: 100, // in units
  },
  {
    name: "Triple Sec",
    quantity: 50, // in units
  },
  {
    name: "Lime Juice",
    quantity: 100, // in ml
  },
  {
    name: "Salt",
    quantity: 500, // in grams
  },
  {
    name: "Mint Leaves",
    quantity: 200, // in grams
  },
  {
    name: "White Rum",
    quantity: 100, // in units
  },
  {
    name: "Sugar Syrup",
    quantity: 100, // in ml
  },
  {
    name: "Gin",
    quantity: 100, // in units
  },
  {
    name: "Tonic Water",
    quantity: 200, // in units
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
