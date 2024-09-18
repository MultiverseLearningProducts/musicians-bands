const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const databasePath = path.join(__dirname, 'db.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databasePath,
});

module.exports = sequelize;
module.exports = {
    sequelize,
    Sequelize
};
