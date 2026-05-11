const Videogame = require("../models/Videogame");

const getAllVideogames = async () => {
  const videogames = await Videogame.find();
  return videogames;
};

const getVideogameById = (id) => {
  const videogame = await Videogame.findById(id);
  if (!videogame) {
    throw { status: 404, message: `Videojuego con ID ${id} no encontrado` };
  }
  return videogame;
};

const addVideogame = async (videogameData) => {
  const newVideogame = new Videogame(videogameData)
  const savedVideogame = await newVideogame.save()
  return savedVideogame;
};

const updateVideogame = async (id, updatedData) => {
  const videogame = await Videogame.findByIdAndUpdate(id, updatedData, {
    new: true, // Retorna el documento actualizado
  });
  if (!videogame) {
    throw { status: 404, message: `Videojuego con ID ${id} no encontrado` }
  }
  return videogame;
};

const deleteVideogame = async (id) => {
  const videogame = await Videogame.findByIdAndDelete(id);
  if (!videogame) {
    throw { status: 404, message: `Videojuego con ID ${id} no encontrado` }
  }
  return videogame;
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
