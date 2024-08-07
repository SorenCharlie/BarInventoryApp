const sequelize = require('../config/database');
const seedDrinks = require('./drinks');
const seedIngredients = require('./ingredients');
const seedDrinkIngredients = require('./drinkIngredients');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedDrinks();
  await seedIngredients();
  await seedDrinkIngredients();
  console.log('All data seeded successfully');
  process.exit(0);
};

seedAll();
