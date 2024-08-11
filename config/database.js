const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("barinventory_db", "postgres", "password", {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
