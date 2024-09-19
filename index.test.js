const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index');

describe('Band, Musician, and Song Models', () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test('can create a Band', async () => {
    const band = await Band.create({ name: 'The Beatles' });
    expect(band.name).toBe('The Beatles');
  });

  test('can create a Musician', async () => {
    const musician = await Musician.create({ name: 'John Lennon', instrument: 'Guitar' });
    expect(musician.name).toBe('John Lennon');
    expect(musician.instrument).toBe('Guitar');
  });

  test('can update a Band', async () => {
    const band = await Band.create({ name: 'Nirvana' });
    band.name = 'Nirvana Updated';
    await band.save();

    const updatedBand = await Band.findByPk(band.id);
    expect(updatedBand.name).toBe('Nirvana Updated');
  });

  test('can update a Musician', async () => {
    const musician = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass' });
    musician.instrument = 'Piano';
    await musician.save();

    const updatedMusician = await Musician.findByPk(musician.id);
    expect(updatedMusician.instrument).toBe('Piano');
  });

  test('can delete a Band', async () => {
    const band = await Band.create({ name: 'The Rolling Stones' });
    await band.destroy();

    const deletedBand = await Band.findByPk(band.id);
    expect(deletedBand).toBeNull();
  });

  test('can delete a Musician', async () => {
    const musician = await Musician.create({ name: 'George Harrison', instrument: 'Guitar' });
    await musician.destroy();

    const deletedMusician = await Musician.findByPk(musician.id);
    expect(deletedMusician).toBeNull();
  });

  test('One-to-Many: Band and Musician', async () => {
    const band = await Band.create({ name: 'The Beatles' });
    const musician1 = await Musician.create({ name: 'John Lennon', instrument: 'Guitar', bandId: band.id });
    const musician2 = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass', bandId: band.id });

    const foundBand = await Band.findByPk(band.id, { include: 'Musicians' });
    expect(foundBand.Musicians.length).toBe(2);
    expect(foundBand.Musicians.map(m => m.name)).toContain('John Lennon');
    expect(foundBand.Musicians.map(m => m.name)).toContain('Paul McCartney');
  });

  test('Many-to-Many: Band and Song', async () => {
    const band1 = await Band.create({ name: 'Nirvana' });
    const band2 = await Band.create({ name: 'Pearl Jam' });
    const song1 = await Song.create({ title: 'Smells Like Teen Spirit' });
    const song2 = await Song.create({ title: 'Alive' });

    await band1.addSong(song1);
    await band1.addSong(song2);
    await band2.addSong(song1);

    const band1Songs = await band1.getSongs();
    expect(band1Songs.length).toBe(2);
    expect(band1Songs.map(s => s.title)).toContain('Smells Like Teen Spirit');
    expect(band1Songs.map(s => s.title)).toContain('Alive');

    const band2Songs = await band2.getSongs();
    expect(band2Songs.length).toBe(1);
    expect(band2Songs.map(s => s.title)).toContain('Smells Like Teen Spirit');

    const song1Bands = await song1.getBands();
    expect(song1Bands.length).toBe(2);
    expect(song1Bands.map(b => b.name)).toContain('Nirvana');
    expect(song1Bands.map(b => b.name)).toContain('Pearl Jam');
  });
});