const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "proyecto",
  username: "postgres",
  password: "root",
  host: "localhost",
  port: 1997,
  dialect: "postgres",
});

module.exports = db;
