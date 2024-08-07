const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Drink = require("./Drink");
const Ingredient = require("./Ingredient");

class DrinkIngredient extends Model {}

DrinkIngredient.init(
  {
    drinkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Drink,
        key: "id",
      },
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Ingredient,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "DrinkIngredient",
    tableName: "DrinkIngredients",
  }
);

Drink.belongsToMany(Ingredient, {
  through: DrinkIngredient,
  foreignKey: "drinkId",
});
Ingredient.belongsToMany(Drink, {
  through: DrinkIngredient,
  foreignKey: "ingredientId",
});

module.exports = DrinkIngredient;
