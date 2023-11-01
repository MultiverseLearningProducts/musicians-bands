const { Model, DataTypes } = require('sequelize');
const {Sequelize, db} = require('../db');

// TODO - define the Song model
let Song;
class Song extends Model{}

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
}, {
    sequelize: db,
    modelName: "Musician",
  })

module.exports = {
    Song
};