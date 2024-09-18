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
        await Song.sequelize.sync({ force: true });
    })

    // test('can create a Band', async () => {
    //     // TODO - test creating a band
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

    // test('can create a Musician', async () => {
    //     // TODO - test creating a musician
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

    test('can create a Song', async () => {
        // TODO - test creating a song
    const testSong = await Song.create({ title: 'Giant Steps', year: 1959, length: 37 });
    expect(testSong.title).toBe('Giant Steps');
    expect(testSong.year).toBe(1959);
    expect(testSong.length).toBe(37);
    })

    // test('can update a Band', async () => {
    //     // TODO - test updating a band
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

    // test('can update a Musician', async () => {
    //     // TODO - test updating a musician
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

 test('can update a Song', async () => {
        // TODO - test updating a song

       const newSong = await Song.create({
            title: "Hero",
            year: 2002,
            length: 4,
        });

        await newSong.update({title: "New Hero"},{where:{title: "Hero"}});
        expect(newSong.title).toBe("New Hero");
    })

    // test('can delete a Band', async () => {
    //     // TODO - test deleting a band
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

    // test('can delete a Musician', async () => {
    //     // TODO - test deleting a musician
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

    test('can delete a Song', async () => {
        // TODO - test deleting a song
        const newSong = await Song.create({
            title: "Hero",
            year: 2002,
            length: 4,
        });

        const deletedSong = await Song.destroy({where:{title:"Hero"}});
        expect(deletedSong).toBe(1);
    })
})