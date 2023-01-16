const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");

const Videos = db.define(
  "videos",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    url: {
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
module.exports = Videos;
