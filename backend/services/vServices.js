const videogame = require("../database/videogame"); // El servicio llama al modelo
const { v4: uuidv4 } = require("uuid");

const getAllVideogames = () => {
  const videogames = videogame.getAllVideogames();
  return videogames;
};

const getVideogameById = (id) => {
  const videogameById = videogame.getVideogameById(id);
  return videogameById;
};

const addVideogame = (videogameData) => {
  const newVideogame = {
    ...videogameData,
    id: uuidv4(),
  };
  const nVideogame = videogame.addVideogame(newVideogame);
  return nVideogame;
};

const updateVideogame = (id, updatedData) => {
  const updatedVideogame = videogame.updateVideogame(id, updatedData);
  return updatedVideogame;
};

const deleteVideogame = (id) => {
  const deletedVideogame = videogame.deleteVideogame(id);
  return deletedVideogame;
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
