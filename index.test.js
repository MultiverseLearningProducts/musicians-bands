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
        // TODO - test creating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        test('can create a Musician', async () => {
          const musician = await Musician.create({ name: 'John Lennon', instrument: 'Guitar' });
          expect(musician.name).toBe('John Lennon');
          expect(musician.instrument).toBe('Guitar');
        
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
        })

    test('can update a Band', async () => {
        // TODO - test updating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        test('can update a Musician instance', async () => {
        const musician = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass' });
  
      musician.instrument = 'Piano';
      await musician.save();
  
      const updatedMusician = await Musician.findByPk(musician.id);
      expect(updatedMusician.instrument).toBe('Piano');
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        test('can delete a Musician instance', async () => {
  const musician = await Musician.create({ name: 'George Harrison', instrument: 'Guitar' });
  
  // Delete the musician
  await musician.destroy();
  
  // Verify the musician no longer exists in the database
  const deletedMusician = await Musician.findByPk(musician.id);
  expect(deletedMusician).toBeNull();
});
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})