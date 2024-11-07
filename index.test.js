const { sequelize } = require('./db');
const { Band} = require('./models/Band') 
const {  Musician} = require('./models/Musician')
const {  Song } = require('./models/Song')

//get seed data:
const {
    seedBand,
    seedMusician,
    seedSong,
  } = require('./seedData');

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });

        //populate with seed data:
        await Band.bulkCreate(seedBand)
        await Musician.bulkCreate(seedMusician)
        await Song.bulkCreate(seedSong)

        
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const oneD = await Band.create({
            name:'One Direction',
            genre:'Pop',
            showCount:10000
        })
        expect(oneD.name).toBe('One Direction')
        expect(oneD.genre).toBe('Pop');
        expect(oneD.showCount).toBe(10000);
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const harry = await Musician.create({
            name:'Harry Styles',
            instrument:'guitar'
        })
        expect(harry.name).toBe('Harry Styles');
        expect(harry.instrument).toBe('guitar');
    })
    test('can create a Song', async () => {
        // TODO - test creating a musician
        const song = await Song.create({
            title:'Insecure',
            year:2015,
            length:60
        })
        expect(song.title).toBe('Insecure');
        expect(song.year).toBe(2015);
        expect(song.length).toBe(60);
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const oneD = await Band.findOne({where:{name:"One Direction"}})

        const UpdatedBand = await oneD.update({
            genre: 'hip hop',
            showCount: 20000
        })

        expect(UpdatedBand.genre).toBe('hip hop');
        expect(UpdatedBand.showCount).toBe(20000);
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const harry = await Musician.findOne({where:{name:'Harry Styles'}})
        const updatedMusician = await harry.update({
            instrument:'voice'
        })
        expect(updatedMusician.instrument).toBe('voice');
    })

    test('can update a Song', async () => {
        // TODO - test updating a Song
        const song = await Song.findOne({where:{title:'Insecure'}})
        const updatedSong = await song.update({
            length:120
        })
        expect(updatedSong.length).toBe(120);
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const bandToDelete = await Band.findOne({where:{name:"One Direction"}})

        await bandToDelete.destroy()

        const bandAfterDeletion = await Band.findOne({where:{name:"One Direction"}})

        expect(bandAfterDeletion).toBeNull();
    })

    test('can delete a Musician', async () => {
        const musicianToDelete = await Musician.findOne({where:{name:"Harry Styles"}})

        await musicianToDelete.destroy()

        const musicianAfterDeletion = await Musician.findOne({where:{name:"Harry Styles"}})

        expect(musicianAfterDeletion).toBeNull();
    })

    test('can delete a Song', async () => {
        const songToDelete = await Song.findOne({where:{title:"Insecure"}})

        await songToDelete.destroy()

        const songAfterDeletion = await Song.findOne({where:{title:"Insecure"}})

        expect(songAfterDeletion).toBeNull();
    })

    test('can increment a value', async () => {

        const band = await Band.findOne({where:{name:"The Rolling Stones"}})

        await band.increment('showCount', {by:100})

        const incrementedBand = await Band.findOne({where:{name:"The Rolling Stones"}})
        expect(incrementedBand.showCount).toBe(250);
    })

    test('Find longest song returns longest song', async () => {

        const songs = await Song.getLongestSong()

        expect(songs.length).toBe(431);
    })

    test('Testing toString method in Band', async () => {

        const band = await Band.findOne({where:{name:'The Rolling Stones'}})
        const bandString = await band.toString()
        //`Band: ${this.name}, Genre: ${this.genre}, ShowCount: ${this.showCount}`;
        expect(bandString).toBe(`Band: The Rolling Stones, Genre: Rock, ShowCount: 250`);
    })

    test('Testing toMinutes method in Song', async () => {

        const song = await Song.findOne({where:{title:'Dynamite'}})
        const songInMinutes = song.toMinutes()
        expect(songInMinutes).toBe('Dynamite length: 3.65');

    })
})