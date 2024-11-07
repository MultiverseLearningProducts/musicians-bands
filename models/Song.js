const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song = sequelize.define('Song', 
    {
        title:Sequelize.STRING,
        year:Sequelize.INTEGER,
        length:Sequelize.INTEGER,
    }
);


Song.prototype.toMinutes = function (){
    const songInMins = (this.length / 60).toFixed(2)
    return `${this.title} length: ${songInMins}`;
}

Song.getLongestSong = async function() {
    // Query the database for the song with the longest length
    const longestSong = await this.findOne({
        order: [['length', 'DESC']],  // Order songs by length in descending order
        limit: 1  // Limit the result to only the longest song
    });

    return longestSong;
};

module.exports = {
    Song
};