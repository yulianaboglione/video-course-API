const { Router } = require("express");
const {
  getAllCourses,
  getWhitCategoryVideo,
  createCourse,
  updateCourse,
} = require("../controllers/courses.controller");

const router = Router();

router.get("/courses", getAllCourses);

router.get("/courses/category/video", getWhitCategoryVideo);

router.post("/courses", createCourse);

router.put("/courses/:id", updateCourse);

module.exports = router;
