const express = require("express");
const mongoose = require("mongoose");
const vRoutes = require("./routes/vRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", vRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a mongoDB");
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error conectando a mongoDB:", error);
    process.exit(1); // Salir del proceso si no se puede conectar a la base de datos
  });
