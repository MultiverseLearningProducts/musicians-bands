const { sequelize } = require('./db');
const { Band, Musician, Song, Manager } = require('./index');  // Adjust the path if necessary


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

//In index.test.js, create a test to account for this association. In the test:
// Use Band.findAll() to get the bands (if there aren’t any from the previous tests, you’ll have to Band.create() some!)
// For each of the bands, use something like foundBand.getMusicians() to check that they have been added correctly!

    test('Band and Musician are associated in a one-to-many relationship', async () => {
        const band = await Band.findOne({ where: { name: 'The Rolling Stones' } });

        const musician1 = await Musician.findOne({ where: { name: 'John Lennon' } });
        const musician2 = await Musician.findOne({ where: { name: 'Elvis Presley' } });

        await band.addMusician(musician1);
        await band.addMusician(musician2);

        const bandWithMusicians = await Band.findOne({
            where: { name: 'The Rolling Stones' },
            include: { model: Musician, as: 'Musicians' }
        });

        const allBands = await Band.findAll()

        //checking all musicians associated to bands
        for(const band of allBands){
            const musicians = await band.getMusicians();
            console.log(`Band: ${band.name}`)
            musicians.forEach(musician=>{
                console.log(`Musician: ${musician.name}`)
            })
        }

        expect(bandWithMusicians.name).toBe('The Rolling Stones');
        expect(bandWithMusicians.Musicians[0].name).toBe('John Lennon');
        expect(bandWithMusicians.Musicians[1].name).toBe('Elvis Presley');

    });

    test('Song and Band are associated in a many-to-many relationship', async () => {
        // Create or find a band
        const band = await Band.findOne({ where: { name: "Adele" } }) || await Band.create({ name: "Adele" });
        
        // Create additional bands
        const band2 = await Band.create({
            name: "The Beatles",
            genre: "rock",
            showCount: "100"
        });
        const band3 = await Band.create({
            name: "Big Time Rush",
            genre: "pop",
            showCount: "120"
        });
        
        // Create or find songs
        const song1 = await Song.findOne({ where: { title: "Someone Like You" } });
        
        const song2 = await Song.create({
            title: "Rolling In The Deep",
            year: 2010,
            length: 225
        });
    
        // Add songs to the Adele band
        await band.addSong(song1);
        await band.addSong(song2);
        
        // Add the bands to song1 (many-to-many)
        await song1.addBand(band2);
        await song1.addBand(band3);
    
        // Fetch the Adele band with associated songs
        const bandWithSongs = await Band.findOne({
            where: { name: "Adele" },
            include: Song
        });
    
        // Use the getSongs() method to retrieve associated songs
        const bandSongs = await bandWithSongs.getSongs();
        
        // Extract the song titles and check they are correct
        const songTitles = bandSongs.map(song => song.title);
        
        // Check that the songs are correctly associated
        expect(songTitles).toContain("Someone Like You");
        expect(songTitles).toContain("Rolling In The Deep");
    
        // Fetch the "Someone Like You" song with associated bands
        const songWithBands = await Song.findOne({
            where: { title: "Someone Like You" },
            include: Band
        });
    
        // Use the getBands() method to retrieve associated bands
        const songBands = await songWithBands.getBands();
        
        // Extract the band names and check they are correct
        const bandNames = songBands.map(band => band.name);
    
        // Check that the bands are correctly associated with "Someone Like You"
        expect(bandNames).toContain("The Beatles");
        expect(bandNames).toContain("Big Time Rush");
    });

    test('Band and Manager has one to one relationship', async () => {
        //get existing band
        //create new manager
        //associate band and new manager
        //test association

        const band = await Band.findOne({where:{name:'BTS'}})
        console.log(band)
        const manager = await Manager.create({
            name: 'Paul Heyman',
            email: 'paulheyman@gmail.com',
            salary: 100000,
            dateHired:new Date('2024-11-11T10:30:00') 
        })

        await band.setManager(manager)

        //get eager loaded data
        const bandWithManager = await Band.findOne({where:{name:"BTS"},include:Manager})
        
        expect(bandWithManager.name).toBe('BTS')

        //logging to check if paul heyman is manager
        console.log('---------------------------------')
        console.log(bandWithManager)
        console.log('---------------------------------')

        expect(bandWithManager.Manager.name).toBe('Paul Heyman');        
       
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
        expect(bandString).toBe(`Band: The Rolling Stones, Genre: Rock, ShowCount: 250`);
    })

    test('Testing toMinutes method in Song', async () => {

        const song = await Song.findOne({where:{title:'Dynamite'}})
        const songInMinutes = song.toMinutes()
        expect(songInMinutes).toBe('Dynamite length: 3.65');

    })



    test('Eager loading test - find all bands with associated musicians and songs', async () => {
        // Create test data
        const testBand = await Band.create({ 
            name: 'Arctic Monkeys', 
            genre: 'Rock' 
        });
        
        const testMusician = await Musician.create({
            name: 'Alex Turner',
            instrument: 'Guitar/Vocals'
        });
        
        const testSong = await Song.create({
            title: 'Do I Wanna Know?',
            year: 2013,
            length: 272
        });
    
        // Associate the models
        await testBand.addMusician(testMusician);
        await testBand.addSong(testSong);
    
        // Find all bands and include musicians
        const bandsWithMusicians = await Band.findAll({
            include: {
                model: Musician,
                as: 'Musicians'
            }
        });
    
        // Find all bands and include songs
        const bandsWithSongs = await Band.findAll({
            include: {
                model: Song,
                as: 'Songs'
            }
        });
    
        // Test the output
        // Log results for debugging
        console.log('\nBands with Musicians:');
        bandsWithMusicians.forEach(band => {
            console.log(`\nBand: ${band.name}`);
            band.Musicians.forEach(musician => {
                console.log(`Musician: ${musician.name}, Instrument: ${musician.instrument}`);
            });
        });
    
        console.log('\nBands with Songs:');
        bandsWithSongs.forEach(band => {
            console.log(`\nBand: ${band.name}`);
            band.Songs.forEach(song => {
                console.log(`Song: ${song.title}, Year: ${song.year}`);
            });
        });
    
        // Basic assertions to verify the data
        expect(bandsWithMusicians.length).toBeGreaterThan(0);
        
        // Find our test band in the results
        const foundTestBand = bandsWithMusicians.find(band => band.name === 'Arctic Monkeys');
        expect(foundTestBand).toBeTruthy();
        expect(foundTestBand.Musicians[0].name).toBe('Alex Turner');
        
        // Test songs association
        const foundTestBandWithSongs = bandsWithSongs.find(band => band.name === 'Arctic Monkeys');
        expect(foundTestBandWithSongs).toBeTruthy();
        expect(foundTestBandWithSongs.Songs[0].title).toBe('Do I Wanna Know?');
    });
    
    
})