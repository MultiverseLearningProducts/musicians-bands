const { db } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await db.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({ name: "test", genre: "fake" });
    expect(testBand).toMatchObject({ name: "test", genre: "fake" });
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "testM",
      instrument: "fakeM",
    });

    expect(testMusician).toMatchObject({ name: "testM", instrument: "fakeM" });
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const testBand = await Band.create({ name: "test", genre: "fake" });
    testBand.update({ name: "updated" });
    expect(testBand).toMatchObject({ name: "updated", genre: "fake" });
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const testMusician = await Musician.create({
      name: "testM",
      instrument: "fakeM",
    });
    testMusician.update({ name: "updatedM" });
    expect(testMusician).toMatchObject({
      name: "updatedM",
      instrument: "fakeM",
    });
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const testBand = await Band.create({ name: "test", genre: "fake" });
    let res = await testBand.destroy();
    console.log(res);
    expect(res).toMatchObject({ name: "test", genre: "fake" });
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician

    const testMusician = await Musician.create({
      name: "testM",
      instrument: "fakeM",
    });
    let res = await testMusician.destroy();
    console.log(res);
    expect(res).toMatchObject({ name: "testM", instrument: "fakeM" });
  });
});
