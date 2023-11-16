const { Model, db, DataTypes } = require("../db");

class Band extends Model {}

Band.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Band",
  }
);

// async function newBand() {
//   await db.sync({ force: true });
//   await Band.create({
//     name: "Bad Bunny",
//     genre: "Trap",
//   });
// }
// newBand();

module.exports = { Band };
