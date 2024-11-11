const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
const {Manager} = require('./models/Manager')
// Define associations here

// In the index.js file, before the module.exports, associate the Band and Musician models.
// Multiple musicians can be added to a band.
// Every musician has only one band.

// In the ./index.js file, before the module.exports, associate the Song and Band models.
// Multiple songs can be added to a Band.
// Multiple bands can have the same Song.

// Define associations in your main index.js (or wherever the associations are set up)
Band.hasMany(Musician, { as: 'Musicians' });  // Define the alias explicitly
Musician.belongsTo(Band);

Song.belongsToMany(Band, {through:"BandSongs"})
Band.belongsToMany(Song, {through:"BandSongs"})

// In the ./index.js file, before the module.exports, associate the two models.
// A single Band can be added to a Manager
// A single Manager can be added to a Band.

Band.hasOne(Manager);
Manager.belongsTo(Band);




module.exports = {
    Band,
    Musician,
    Song,
    Manager
};
