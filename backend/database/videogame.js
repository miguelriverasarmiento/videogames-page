const DB = require("./data.json");
const { saveToDatabase } = require("./utils");

const getAllVideogames = () => {
  return DB.videogames;
};

const getVideogameById = (id) => {
  return DB.videogames.find((v) => v.id == id);
};

const addVideogame = (videogame) => {
  DB.videogames.push(videogame);
  saveToDatabase(DB);
  return videogame;
};

const updateVideogame = (id, updatedData) => {
  const index = DB.videogames.findIndex((v) => v.id == id);
  if (index === -1) return null;
  DB.videogames[index] = { ...DB.videogames[index], ...updatedData };
  saveToDatabase(DB);
  return DB.videogames[index];
};

const deleteVideogame = (id) => {
  const index = DB.videogames.findIndex((v) => v.id == id);
  if (index === -1) return null;
  const deletedVideogame = DB.videogames.splice(index, 1); // Elimina el videojuego y lo devuelve en un array
  saveToDatabase(DB);
  return deletedVideogame[0];
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
