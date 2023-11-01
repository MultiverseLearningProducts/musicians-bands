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

  // DONE - test creating a band
  test("can create a Band", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });
    expect(testBand).toBeInstanceOf(Band);
  });

  test("creates the right Band name", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });
    expect(testBand.name).toBe("myBandName");
  });

  test("creates the right Band genre", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });
    expect(testBand.genre).toBe("Pop");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can create a Song", async () => {
    // TODO - test creating a song
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can update a Song", async () => {
    // TODO - test updating a Song
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can delete a Song", async () => {
    // TODO - test deleting a song
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });
});
