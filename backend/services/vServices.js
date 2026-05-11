const videogame = require("../database/videogame"); // El servicio llama a database

const getAllVideogames = async () => {
  return await videogame.getAllVideogames();
};

const getVideogameById = async (id) => {
  return await videogame.getVideogameById(id);
};

const addVideogame = async (videogameData) => {
  return await videogame.addVideogame(videogameData);
};

const updateVideogame = (id, updatedData) => {
  return await videogame.updateVideogame( id, updatedData)
};

const deleteVideogame = (id) => {
  return await videogame.deleteVideogame(id);
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
