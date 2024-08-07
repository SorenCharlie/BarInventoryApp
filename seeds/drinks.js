const { Drink } = require('../models');

const drinkData = [
  {
    name: "Jack and Coke",
    type: "Mixed Drink",
    brand: "N/A",
    price: 8.00,
  },
  // Add more drinks
];

const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;
