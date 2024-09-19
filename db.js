
const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize(
    {
        dialect: 'sqlite',
        storage: path.join(__dirname, 'db.sqlite')

const databasePath = path.join(__dirname, "db.sqlite");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: databasePath,
});

module.exports = sequelize;
module.exports = {
  sequelize,
  Sequelize,
    }
);
module.exports = {
    db,
    DataTypes,
    Model,
};
