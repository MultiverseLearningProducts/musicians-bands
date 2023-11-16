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

  test('OneToMany Relations Band - Musician', async()=>{
    const band = await Band.create({ name: 'test', genre: 'pop'})
    const musician = await Musician.create({ name: 'Test', instrument: 'guitar'})
    const musicianWithBand = await musician.setBand(band)
    const updatedBand = await band.addMusician(musician)
    const response = await updatedBand.getMusicians()
    const idMusician = musicianWithBand.BandId
    expect(response[0].BandId).toEqual(idMusician)
  })
  test('ManyToMany Relations Song - Band', async () => {
    const band1 = await Band.create({ name: 'test', genre: 'pop'})
    const song1 = await Song.create({title:"whatever",year:"2010", length:3})
    const song2 = await Song.create({title:"whatever2",year:"2011", length:4})
    const songWithBand = await song1.addBand(band1)
    const bandWithSongs = await band1.setSongs([song1,song2])
    expect(songWithBand[0].BandId).toBe(band1.id)
    expect(songWithBand[0].BandId).toBe(song2.id);
    
  })

});
