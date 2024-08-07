const { DrinkIngredient } = require('../models');

const drinkIngredientData = [
  {
    drinkId: 1, // Jack and Coke 
    ingredientId: 1, // Jack Daniels 
    quantity: 1,
  },
  {
    drinkId: 1, // Jack and Coke
    ingredientId: 2, // Coca-Cola
    quantity: 2,
  },

];

const seedDrinkIngredients = () => DrinkIngredient.bulkCreate(drinkIngredientData);

module.exports = seedDrinkIngredients;
