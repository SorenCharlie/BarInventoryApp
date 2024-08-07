const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Drink extends Model {}

Drink.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Drink',
});

module.exports = Drink;
