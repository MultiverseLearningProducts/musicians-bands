const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize');

// TODO - define the Band model
let Band = sequelize.define( "Band",
    {
        name: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        }
    }
)

module.exports = {
    Band
};