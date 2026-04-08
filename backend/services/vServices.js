const videogame = require("../database/videogame"); // El servicio crea una funcion que llama al modelo de la DB

const getAllVideogames = () => {
  const videogames = videogame.getAllVideogames();
  return videogames;
};

const getVideogameById = (id) => {
  const videogameById = videogame.getVideogameById(id);
  return videogameById;
};

const addVideogame = (videogameData) => {
  const newVideogame = videogame.addVideogame(videogameData);
  return newVideogame;
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
};
