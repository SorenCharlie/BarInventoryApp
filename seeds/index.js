const sequelize = require("../config/database");
const seedDrinks = require("./drinks");
const seedIngredients = require("./ingredients");
const seedDrinkIngredients = require("./drinkIngredients");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced");
    await seedDrinks();
    console.log("Drinks seeded");
    await seedIngredients();
    console.log("Ingredients seeded");
    await seedDrinkIngredients();
    console.log("Drink ingredients seeded");
    console.log("All data seeded successfully");
  } catch (error) {
    console.error("Failed to seed data:", error);
  } finally {
    process.exit(0);
  }
};

seedAll();
