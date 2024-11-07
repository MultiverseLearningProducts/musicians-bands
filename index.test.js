const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const band = await Band.create({ name: "Test Band", genre: "Rock" });
    expect(band.name).toBe("Test Band");
    expect(band.genre).toBe("Rock");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const musician = await Musician.create({
      name: "John Doe",
      instrument: "Guitar",
    });
    expect(musician.name).toBe("John Doe");
    expect(musician.instrument).toBe("Guitar");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const band = await Band.create({ name: "Old Band Name", genre: "Jazz" });
    band.name = "New Band Name";
    await band.save();
    expect(band.name).toBe("New Band Name");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const musician = await Musician.create({
      name: "Jane Doe",
      instrument: "Piano",
    });
    musician.instrument = "Violin";
    await musician.save();
    expect(musician.instrument).toBe("Violin");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const band = await Band.create({ name: "Delete Band", genre: "Pop" });
    await band.destroy();
    const foundBand = await Band.findByPk(band.id);
    expect(foundBand).toBeNull();
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    const musician = await Musician.create({
      name: "Delete Musician",
      instrument: "Drums",
    });
    await musician.destroy();
    const foundMusician = await Musician.findByPk(musician.id);
    expect(foundMusician).toBeNull();
  });

  test("Associates Band with Musicians", async () => {
    // TODO - test associating musicians with a band
    const band = await Band.create({ name: "The Rockers", genre: "Rock" });
    const musician1 = await Musician.create({
      name: "Alice",
      instrument: "Guitar",
      BandId: band.id,
    });
    const musician2 = await Musician.create({
      name: "Bob",
      instrument: "Drums",
      BandId: band.id,
    });

    const musicians = await band.getMusicians();
    expect(musicians.length).toBe(2);
    expect(musicians[0].name).toBe("Alice");
    expect(musicians[1].name).toBe("Bob");
  });

  test("Associates Bands with Songs", async () => {
    // TODO - test associating songs with bands
    const band1 = await Band.create({ name: "The Rockers", genre: "Rock" });
    const band2 = await Band.create({ name: "The Jazzers", genre: "Jazz" });
    const song1 = await Song.create({
      title: "Rock Anthem",
      year: 2020,
      length: 300,
    });
    const song2 = await Song.create({
      title: "Jazz Melody",
      year: 2021,
      length: 250,
    });

    await band1.addSong(song1);
    await band1.addSong(song2);
    await band2.addSong(song1);

    const songsOfBand1 = await band1.getSongs();
    expect(songsOfBand1.length).toBe(2);
    expect(songsOfBand1[0].title).toBe("Rock Anthem");
    expect(songsOfBand1[1].title).toBe("Jazz Melody");

    const bandsOfSong1 = await song1.getBands();
    expect(bandsOfSong1.length).toBe(2);
    expect(bandsOfSong1[0].name).toBe("The Rockers");
    expect(bandsOfSong1[1].name).toBe("The Jazzers");
  });

  test("Adds multiple musicians to a band", async () => {
    // TODO - test adding multiple musicians to a band
    const band = await Band.create({
      name: "The New Band",
      genre: "Alternative",
    });
    const musician1 = await Musician.create({
      name: "Charlie",
      instrument: "Bass",
      BandId: band.id,
    });
    const musician2 = await Musician.create({
      name: "Dave",
      instrument: "Keyboard",
      BandId: band.id,
    });

    const musicians = await band.getMusicians();
    expect(musicians.length).toBe(2);
    expect(musicians[0].name).toBe("Charlie");
    expect(musicians[1].name).toBe("Dave");
  });
});
