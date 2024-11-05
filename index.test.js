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
});
