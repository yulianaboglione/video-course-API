const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Courses = db.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  instructor: {
    type: DataTypes.STRING,
  },
});
module.exports = Courses;
