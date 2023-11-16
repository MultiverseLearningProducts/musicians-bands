const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
// Define associations here

// Band OneToMany Musitians 
Band.hasMany(Musician)
Musician.belongsTo(Band)

Song.belongsToMany(Band, {through: "Songs-Band"})
Band.belongsToMany(Song, {through: "Songs-Band"})

async function main() { 
const band1 = await Band.create({ name: 'test', genre: 'pop'})
const song1 = await Song.create({title:"whatever",year:"2010", length:3})
const song2 = await Song.create({title:"whatever2",year:"2011", length:4})
// const songWithBand = await song1.addBand(band1)
const bandWithSongs = await band1.setSongs(song1,song2)
console.log("bandWithSongs", JSON.stringify(bandWithSongs,null,2))
bandWithSongs.forEach(element => console.log("element",element))
  


    console.log(song1.__proto__)
    console.log(band1.__proto__)
}
main()

module.exports = {
  Band,
  Musician,
  Song,
};
