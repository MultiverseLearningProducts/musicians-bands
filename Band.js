const { DataTypes, QueryInterface } = require("sequelize");
const { Sequelize, sequelize } = require("./db");

// TODO - define the Band model
let Band = sequelize.define("Band", {
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
});

// add a column to Band

// async function main() {
//   await sequelize.sync();
//   queryInterface.addColumn("name", "genre", {
//     showCount: DataTypes.NUMBER,
//   });
// }
// main();

module.exports = {
  Band,
};
