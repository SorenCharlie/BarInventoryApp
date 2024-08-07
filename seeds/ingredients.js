const { Ingredient } = require("../models");

const ingredientData = [
  {
    ingredientId: "Jack Daniels",
    quantity: 100, // in units
  },
  {
    ingredientId: "Coca-Cola",
    quantity: 200, // in units
  },
  {
    ingredientId: "Tequila",
    quantity: 100, // in units
  },
  {
    ingredientId: "Triple Sec",
    quantity: 50, // in units
  },
  {
    ingredientId: "Lime Juice",
    quantity: 100, // in ml
  },
  {
    ingredientId: "Salt",
    quantity: 500, // in grams
  },
  {
    ingredientId: "Mint Leaves",
    quantity: 200, // in grams
  },
  {
    ingredientId: "White Rum",
    quantity: 100, // in units
  },
  {
    ingredientId: "Sugar Syrup",
    quantity: 100, // in ml
  },
  {
    ingredientId: "Gin",
    quantity: 100, // in units
  },
  {
    ingredientId: "Tonic Water",
    quantity: 200, // in units
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
