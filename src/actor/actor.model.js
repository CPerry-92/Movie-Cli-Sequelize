const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Actor = sequelize.define("Actor", {
  actorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actorID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
});

module.exports = Actor;
