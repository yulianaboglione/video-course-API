const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const UsersCourses = require("../models/userCourses.model");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const initModels = require("../models/initModels");
const db = require("../utils/database");

initModels();

const users = [
  {
    first_name: "Andres",
    last_name: "Juarez",
    password: "123hhq",
    email: "andres@gmail.com",
  },
  {
    first_name: "Karla",
    last_name: "Morales",
    password: "t2323ew",
    email: "karla@gmail.com",
  },
  {
    first_name: "Brillitt",
    last_name: "Ccasa",
    password: "443gggq",
    email: "brillitt@gmail.com",
  },
  {
    first_name: "Jorge",
    last_name: "Salas",
    password: "2322d",
    email: "jorge@gmail.com",
  },
];

const categories = [
  { name: "Sports", courseId: 1 },
  { name: "Letters", courseId: 2 },
  { name: "Scients", courseId: 2 },
  { name: "Matt", courseId: 3 },
  { name: "English", courseId: 3 },
];

const courses = [
  {
    title: "Soccer",
    description: "Soccer desde 0 hasta avanzado",
    instructor: "Cristiano Ronaldo",
  },
  {
    title: "Node",
    description: "Node desde 0 hasta avanzado",
    instructor: "Zinedine Zidane",
  },
  {
    title: "React",
    description: "React desde 0 hasta avanzado",
    instructor: "Matt Takamiya",
  },
  {
    title: "BaseDeDatos",
    description: "BaseDeDatos nivel avanzado",
    instructor: "Andrés Cáceres",
  },
  {
    title: "Fundamentos",
    description: "Fundamentos desde 0 hasta avanzado",
    instructor: "BrendaBeron",
  },
];

const videos = [
  { title: "Soccer", url: "www.youtube.com/soccer", courseId: 1 },
  { title: "Node", url: "www.youtube.com/node", courseId: 2 },
  { title: "React", url: "www.youtube.com/react", courseId: 3 },
  { title: "BaseDeDatos", url: "www.youtube.com/basededatos", courseId: 4 },
  { title: "Fundamentos", url: "www.youtube.com/fundamentos", courseId: 5 },
];

const usersCourses = [
  { userId: 1, courseId: 2 },
  { userId: 1, courseId: 4 },
  { userId: 2, courseId: 1 },
  { userId: 3, courseId: 5 },
  { userId: 4, courseId: 3 },
];

db.sync({ forse: true })
  .then(() => {
    console.log("Iniciando la plantacion de informacion");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 200);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 300);

    setTimeout(() => {
      usersCourses.forEach((userCourse) => UsersCourses.create(userCourse));
    }, 400);
  })
  .catch((error) => console.log(error));
