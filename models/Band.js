const { Sequelize, sequelize } = require("../db");

// TODO - define the Band model
let Band;

Band = sequelize.define("Band", {
  name: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
});

module.exports = {
  Band,
};
