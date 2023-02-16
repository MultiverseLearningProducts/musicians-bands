const { NUMBER } = require("sequelize");
const { Band } = require("./Band");
const { sequelize } = require("./db");
const { Musician } = require("./Musician");

// create
async () => {
  await sequelize.sync({ force: true });

  let musician = await Musician.create({
    name: "Matt",
    instrument: "Saxophone",
  });

  // let NewMusician = await Musician.create({
  //   name: "Dede",
  //   instrument: "Piano",
  // });

  //delete an instance
  await NewMusician.destroy({
    where: {
      name: "Dede",
    },
  });
};

module.exports = {
  Band,
  Musician,
};
