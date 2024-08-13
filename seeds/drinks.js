const { Drink } = require("../models");

const drinkData = [
  {
    name: "Jack and Coke",
    type: "Mixed Drink",
    brand: "N/A",
    price: 8.0,
  },
  {
    name: "Margarita",
    type: "Cocktail",
    brand: "N/A",
    price: 10.0,
  },
  {
    name: "Mojito",
    type: "Cocktail",
    brand: "N/A",
    price: 9.0,
  },
  {
    name: "Gin and Tonic",
    type: "Mixed Drink",
    brand: "N/A",
    price: 7.5,
  },
  {
    name: "Rum and Coke",
    type: "Mixed Drink",
    brand: "N/A",
    price: 7.5,
  },
];

const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;
