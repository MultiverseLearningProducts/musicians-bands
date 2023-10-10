const {Sequelize, sequelize} = require('../db');
const { Model } = require('sequelize');

// TODO - define the Song model
class Song extends Model {
    
};
// let Song;
Song.init({
    title: Sequelize.STRING,
    year: Sequelize.NUMBER,
    length: Sequelize.NUMBER
}, {
    sequelize: sequelize, modelName: "Song"
});
// await sequelize.sync({force: true});
module.exports = {
    Song
};