const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");
const Actor = require("../actor/actor.model");

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.INTEGER,
    references: { model: "Actors", key: "actorID" },
  },
});

module.exports = Movie;

// const Movie = sequelize.define("Movie", {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   genre: {
//     type: DataTypes.STRING,
//   },
//   director: {
//     type: DataTypes.STRING,
//     references: {
//       model: Director,
//       key: directorID,
//     },
//   },
// });
// Movie.associate = (models) => {
//   Movie.belongsTo(models.Director, {
//     foreignKey: {
//       allowNull: false,
//     },
//   });
// };
