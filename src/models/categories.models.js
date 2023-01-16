const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Categories = db.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "course_id",
      references: {
        model: Courses,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Categories;
