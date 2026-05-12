const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  imagen: { type: String },
  descripcion: { type: String },
  genero: { type: String, required: true },
  plataforma: { type: String, required: true },
  precio: { type: Number, required: true },
});

module.exports = mongoose.model("Videogame", videogameSchema);
