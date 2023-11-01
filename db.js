const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

// console.log(db);

module.exports = {
  db,
  Sequelize,
  Model,
  DataTypes,
};
