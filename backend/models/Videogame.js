const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema({
  titulo: { type: string, required: true },
  imagen: { type: string },
  descripcion: { type: string },
  genero: { type: string, required: true },
  plataforma: { type: string, required: true },
  precio: { type: number, required: true },
});

module.exports = mongoose.model("Videogame", videogameSchema);
