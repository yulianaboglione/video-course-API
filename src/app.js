const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");

const userRoutes = require("./routes/users.routes");
const userCoursesRoutes = require("./routes/userCourses.routes");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");

const PORT = 8000;
const app = express();

app.use(express.json());

// Rutas
app.use("/api/v1", userRoutes);
app.use("/api/v1", userCoursesRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);

initModels();

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Sincronizacion exitosa"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
