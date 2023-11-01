const { Model, DataTypes } = require('sequelize');
const {Sequelize, db} = require('../db');

// TODO - define the Musician model
let Musician;

class Musician extends Model{}

Musician.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
}, {
    sequelize: db,
    modelName: "Musician",
  })

module.exports = {
    Musician
};