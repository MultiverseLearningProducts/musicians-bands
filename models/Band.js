const { Model } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
class Band extends Model {
    
};
// let Band;
Band.init({
    name: Sequelize.STRING,
    genre: Sequelize.STRING
}, {
    sequelize: sequelize, modelName: "Band"
});
// await sequelize.sync({force: true});
module.exports = {
    Band
};