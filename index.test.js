const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
    
    await Band.create({ name: 'Band A' });
    await Band.create({ name: 'Band B' });
    
    await Musician.create({ name: 'Musician 1', BandId: 1 });
    await Musician.create({ name: 'Musician 2', BandId: 1 });
    await Musician.create({ name: 'Musician 3', BandId: 2 });

    await Song.create({ title: 'Song 1' });
    await Song.create({ title: 'Song 2' });
  })

  test('is associated', async () => {
    const bands = await Band.findAll({ include: Musician });

    expect(bands.length).toBe(2);
    expect(bands[0].Musicians.length).toBe(2);
    expect(bands[1].Musicians.length).toBe(1);
    console.log(bands[0]);
  })

  /*test('can create a Band', async () => {
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
  */

  test("bands have associated songs", async () => {
    // Assuming you have associated songs with bands
    const band = await Band.findByPk(1);
    const songs = await band.getSongs();
  
    expect(songs.length).toBe(0);
  
    await band.addSong(1);
    await band.addSong(2);
  
    // Retrieve songs again
    const updatedSongs = await band.getSongs();
  
    // Check associations again
    expect(updatedSongs.length).toBe(2);
  });
})