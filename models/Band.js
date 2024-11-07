const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = sequelize.define('Band',
    {
        name: Sequelize.STRING,
        genre: Sequelize.STRING,
        showCount: Sequelize.INTEGER,
    });


    
Band.prototype.toString= function (){
    return `Band: ${this.name}, Genre: ${this.genre}, ShowCount: ${this.showCount}`;
}
module.exports = {
    Band
};