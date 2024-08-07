const { DrinkIngredient } = require("../models");

const drinkIngredientData = [
  {
    drinkId: 1, // Jack and Coke
    ingredientId: 1, // Jack Daniels
    quantity: 1,
  },
  {
    drinkId: 1, // Jack and Coke
    ingredientId: 2, // Coca-Cola
    quantity: 1,
  },
  {
    drinkId: 2, // Margarita
    ingredientId: 3, // Tequila
    quantity: 1,
  },
  {
    drinkId: 2, // Margarita
    ingredientId: 4, // Triple Sec
    quantity: 1,
  },
  {
    drinkId: 2, // Margarita
    ingredientId: 5, // Lime Juice
    quantity: 1,
  },
  {
    drinkId: 2, // Margarita
    ingredientId: 6, // Salt
    quantity: 1,
  },
  {
    drinkId: 3, // Mojito
    ingredientId: 7, // Mint Leaves
    quantity: 1,
  },
  {
    drinkId: 3, // Mojito
    ingredientId: 8, // White Rum
    quantity: 1,
  },
  {
    drinkId: 3, // Mojito
    ingredientId: 9, // Sugar Syrup
    quantity: 1,
  },
  {
    drinkId: 3, // Mojito
    ingredientId: 5, // Lime Juice
    quantity: 1,
  },
  {
    drinkId: 4, // Gin and Tonic
    ingredientId: 10, // Gin
    quantity: 1,
  },
  {
    drinkId: 4, // Gin and Tonic
    ingredientId: 11, // Tonic
    quantity: 1,
  },
  {
    drink_id: 5, // Rum and Coke
    ingredientId: 8, // Rum
    quantity: 1,
  },
  {
    drink_id: 5, // Rum and Coke
    ingredientId: 2, // Coca-Cola
    quantity: 1,
  },
];

const seedDrinkIngredients = () =>
  DrinkIngredient.bulkCreate(drinkIngredientData);

module.exports = seedDrinkIngredients;
