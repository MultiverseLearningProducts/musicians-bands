const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song = sequelize.define('song', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = {
    Song
};