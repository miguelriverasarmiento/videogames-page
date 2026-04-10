const videogame = require("../database/videogame"); // El servicio llama al modelo
const { v4: uuidv4 } = require("uuid");

const getAllVideogames = () => {
  try {
    const videogames = videogame.getAllVideogames();
    return videogames;
  } catch (error) {
    throw error;
  }
};

const getVideogameById = (id) => {
  try {
    const videogameById = videogame.getVideogameById(id);
    return videogameById;
  } catch (error) {
    throw error;
  }
};

const addVideogame = (videogameData) => {
  const newVideogame = {
    ...videogameData,
    id: uuidv4(),
  };
  try {
    const nVideogame = videogame.addVideogame(newVideogame);
    return nVideogame;
  } catch (error) {
    throw error;
  }
};

const updateVideogame = (id, updatedData) => {
  try {
    const updatedVideogame = videogame.updateVideogame(id, updatedData);
    return updatedVideogame;
  } catch (error) {
    throw error;
  }
};

const deleteVideogame = (id) => {
  try {
    const deletedVideogame = videogame.deleteVideogame(id);
    return deletedVideogame;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
