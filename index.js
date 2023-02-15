const { NUMBER } = require("sequelize");
const { Band } = require("./Band");
const { sequelize } = require("./db");
const { Musician } = require("./Musician");

module.exports = {
  Band,
  Musician,
};
