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
    const createdBand = await Band.create({ name: 'Test Band' });
    expect(createdBand.name).toBe('Test Band');
  })

  test('can create a Musician', async () => {
    const createdMusician = await Musician.create({ name: 'Test Musician' });
    expect(createdMusician.name).toBe('Test Musician');
  })

  test('can create a Song', async () => {
    const createdSong = await Song.create({ title: 'Test Song' });
    expect(createdSong.title).toBe('Test Song');
  })
  
  test('can update a Band', async () => {
    const band = await Band.create({ name: 'Band to Update' });
    await band.update({ name: 'Band Updated' });
    expect(band.name).toBe('Band Updated');
  })

  test('can update a Musician', async () => {
    const musician = await Musician.create({ name: 'Musician to Update' });
    await musician.update({ name: 'Musician Updated' })
    expect(musician.name).toBe('Musician Updated');
  })

  test('can delete a Band', async () => {
    const band = await Band.create({ name: 'Band to Delete' });
    await band.destroy();
    const foundBand = await Band.findByPk(band.id);
    expect(foundBand).toBeNull();
  })

  test('can delete a Musician', async () => {
    const musician = await Musician.create({ name: 'Musician to Delete' });
    await musician.destroy();
    const foundMusician = await Band.findByPk(musician.id);
    expect(foundMusician).toBeNull();
  })
})