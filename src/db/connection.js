const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_URI);

try {
  sequelize.authenticate();
} catch (error) {
  console.log(error);
}

module.exports = sequelize;
