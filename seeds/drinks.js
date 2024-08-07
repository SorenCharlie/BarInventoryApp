const { Drink } = require('../models');

const drinkData = [
  {
    name: "Jack and Coke",
    type: "Mixed Drink",
    brand: "N/A",
    price: 8.00,
  },
  {
    name: "Margarita",
    type: "Cocktail",
    brand: "N/A",
    price: 10.00,
  },
  {
    name: "Mojito",
    type: "Cocktail",
    brand: "N/A",
    price: 9.00,
  },
  {
    name: "Gin and Tonic",
    type: "Mixed Drink",
    brand: "N/A",
    price: 7.50,
  },
  {
    name: "Rum and Coke",
    type: "Mixed Drink",
    brand: "N/A",
    price: 7.50,
  },
];

const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;
