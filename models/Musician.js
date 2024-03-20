const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
let Musician = sequelize.define('musician', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    instrument: {
        type: Sequelize.STRING,
        allowNull: false
    }
}); 

module.exports = {
    Musician
};