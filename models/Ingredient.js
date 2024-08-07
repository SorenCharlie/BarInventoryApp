const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Ingredient extends Model {}

Ingredient.init(
  {
    ingredientId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Ingredient",
  }
);

module.exports = Ingredient;
