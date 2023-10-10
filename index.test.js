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
        const punkBand = await Band.create({
            name: "linkin park",
            genre: "rock"
        })
        // TODO - test creating a band
        expect(punkBand.name).toBe("linkin park");
    })

    test('can create a Musician', async () => {
        const adele = await Musician.create({
            name: "hello",
            instrument: "voice"
        })
        // TODO - test creating a musician
        expect(adele.name).toBe("hello");
    })

    test('can update a Band', async () => {
        const punkBand = await Band.create({
            name: "linkin park",
            genre: "rock"
        })
        // TODO - test creating a band

        punkBandUpdate = await punkBand.update({
            name: "FooFighters",
            genre: "rock"
        })
        // TODO - test updating a band
        expect(punkBandUpdate.name).toBe("FooFighters");
    })

    test('can update a Musician', async () => {
        const adele = await Musician.create({
            name: "hello",
            instrument: "voice"
        })

        adeleUpdate = await adele.update({
            name: "Beyonce",
            instrument: "rennaissance"
        })

        // TODO - test updating a musician
        expect(adeleUpdate.name).toBe("Beyonce");
    })

    test('can delete a Band', async () => {
        punkBand = await Band.create({
            name: "FooFighters",
            genre: "rock"
        })
        // TODO - test deleting a band
        expect(await punkBand.destroy()).toBe(punkBand);
    })

    test('can delete a Musician', async () => {
        adele = await Musician.create({
            name: "hello",
            instrument: "voice"
        })
        // TODO - test deleting a musician
        expect(await adele.destroy()).toBe(adele);
    })
})