const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({name:"Hashid"}, {genre:"Rock"})
        expect(testBand.name).toBe('Hashid');
    })

    test('can create a Musician', async () => {
        const testMusicican = await Musician.create({name:"Future"}, {instrument:"Booth"})
        expect(testMusicican.name).toBe('Future');
    })

    test('can create a Song', async () => {
        const testSong = await Song.create({title: "Hard to Choose One"}, {year: 2019}, {length:2905})
        expect(testSong.title).toBe('Hard to Choose One');
    })

    test('can update a Band', async () => {
        const testBand = await Band.create({name:"ACDC"}, {genre:"RRoll"})
        await testBand.update({name:"Jackson5"}) 
        await testBand.save()
        expect(testBand.name).toBe('Jackson5');
    })

    test('can update a Musician', async () => {
        const testMusician =  await Musician.create({name:"Rocko"}, {instrument:"Microphone"})
        await testMusician.update({instrument: "Studio"});
        await testMusician.save();
        expect(testMusician.instrument).toBe('Studio');
    })

    test('can update a Song', async () => {
        const testSong =  await Song.create({name:"Rocko"}, {year:1964}, {length:3210})
        await testSong.update({year:1984});
        await testSong.save();
        expect(testSong.year).toBe(1984);
    })

    test('can delete a Band', async () => {
        let testBand = await Band.create({name:"Hashid"}, {genre:"Rock"});
         await testBand.destroy();
         const deletedBand = await Band.findByPk(testBand.id)
         expect(deletedBand).toBeNull();
    })


    test('can delete a Musician', async () => {
        let testMusician =  await Musician.create({name:"Rocko"}, {instrument:"Microphone"})
         await testMusician.destroy();
         const deleteMusician = await Musician.findByPk(testMusician.id)
         expect(deleteMusician).toBeNull();
    })



    test('can delete a Song', async () => {
        let testSong = await Song.create({title: "Hard to Choose One"}, {year: 2019}, {length:2905})
         await testSong.destroy();
         const deleteSong = await Song.findByPk(testSong.id)
         expect(deleteSong).toBeNull();
    })



})