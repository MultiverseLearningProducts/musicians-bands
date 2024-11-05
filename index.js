const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
const { sequelize } = require("./db");

// Define associations here
Band.hasMany(Musician);
Musician.belongsTo(Band);

Band.hasMany(Song);
Song.belongsTo(Band);

module.exports = {
  Band,
  Musician,
  Song,
  sequelize,
};
