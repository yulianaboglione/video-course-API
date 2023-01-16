const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");
const Categories = require("../models/categories.models");
const UsersCourses = require("../models/userCourses.model");

const initModels = () => {
  UsersCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(UsersCourses, { as: "courses", foreignKey: "user_id" });

  UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(UsersCourses, { as: "courses", foreignKey: "course_id" });

  Categories.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(Categories, { as: "category", foreignKey: "course_id" });

  Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(Videos, { as: "video", foreignKey: "course_id" });
};

module.exports = initModels;
