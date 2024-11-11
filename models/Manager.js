const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
let Manager = sequelize.define('Manager',
    {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        salary: Sequelize.INTEGER,
        dateHired: Sequelize.DATE
    });


module.exports = {
    Manager
};