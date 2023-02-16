const { sequelize } = require("./db");
const { Band, Musician } = require("./index");

describe("Band and Musician Models", () => {
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
    let band = await Band.create({
      name: "Big Band",
      genre: "Jazz",
      showCount: 5,
    });
    expect(typeof Band).toBe("function");
    expect(band).toHaveProperty("name", "Big Band");
    expect(band).toHaveProperty("genre", "Jazz");
    expect(band.showCount).toBe(5);
  });

  test("can create a Musician", async () => {
    let musician = await Musician.create({
      name: "Matt",
      instrument: "Saxophone",
    });
    expect(typeof Musician).toBe("function");
    expect(musician).toHaveProperty("name", "Matt");
    expect(musician).toHaveProperty("instrument", "Saxophone");
  });

  test("can create a new Musician", async () => {
    let newMusician = await Musician.create({
      name: "Dede",
      instrument: "Piano",
    });
    expect(typeof Musician).toBe("function");
    expect(newMusician).toHaveProperty("name", "Dede");
    expect(newMusician).toHaveProperty("instrument", "Piano");
  });
  test("delete a Musician Instance", async () => {
    let Newmusician = await Musician.destroy({
      where: {
        name: "Dede",
      },
    });
    expect(typeof Musician).toBe("function");
  });

  test("update a Musician Instance", async () => {
    let musician = await Musician.create({
      name: "Matt",
      instrument: "Saxophone",
    });
    musician.update({
      name: "Joan",
      instrument: "Violin",
    });
    await musician.save();
    expect(musician).toHaveProperty("name", "Joan");
    expect(musician).toHaveProperty("instrument", "Violin");
  });
});
