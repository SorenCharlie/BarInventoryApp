const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Drink = require('./Drink');
const Ingredient = require('./Ingredient');

class DrinkIngredient extends Model {}

DrinkIngredient.init({
  drinkId: {
    type: DataTypes.INTEGER,
    references: {
      model: Drink,
      key: 'id',
    },
  },
  ingredientId: {
    type: DataTypes.INTEGER,
    references: {
      model: Ingredient,
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'DrinkIngredient',
});

Drink.belongsToMany(Ingredient, { through: DrinkIngredient });
Ingredient.belongsToMany(Drink, { through: DrinkIngredient });

module.exports = DrinkIngredient;
