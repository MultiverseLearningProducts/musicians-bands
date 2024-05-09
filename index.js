const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
/*
const createdBand = await Band.create({
  name: 'Test Band',
  genre: 2001
});

const createdMusician = await Musician.create({
  name: 'Test Musician',
  instrument: 2001
});

const createdSong = await Song.create({
  title: 'Test Song',
  year: 2001,
  length: 32
});

const updateBand = await createdBand.update({
  name: 'Band Updated'
})

const updateMusician = await createdMusician.update({
  name: 'Musician Updated'
})
*/
module.exports = {
    Band,
    Musician,
    Song
};
