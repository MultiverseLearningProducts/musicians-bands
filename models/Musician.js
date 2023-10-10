const {Sequelize, sequelize} = require('../db');
const { Model } = require('sequelize');

// TODO - define the Musician model
class Musician extends Model {
    
};
// let Musician;
Musician.init({
    name: Sequelize.STRING,
    instrument: Sequelize.STRING
}, {
    sequelize: sequelize, modelName: "Musician"
});
// await sequelize.sync({force: true});
module.exports = {
    Musician
};