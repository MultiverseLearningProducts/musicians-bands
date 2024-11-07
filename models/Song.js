const {Sequelize, sequelize} = require('../db');
const {DataTypes} = require('sequelize');

// TODO - define the Song model
let Song = sequelize.define("Song", {
    title: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.NUMBER
    },
    length: {
        type: DataTypes.NUMBER
    }
})

module.exports = {
    Song
};