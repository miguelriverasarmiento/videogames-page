const DB = require("./data.json");

const getAllVideogames = () => {
  return DB.videogames;
};

const getVideogameById = (id) => {
  return DB.videogames.find((v) => v.id === id);
};

const addVideogame = (videogame) => {
  const newVideogame = {
    id: DB.videogames.length + 1,
    titulo: videogame.titulo,
    genero: videogame.genero,
    precio: videogame.precio,
  };
  DB.videogames.push(newVideogame);
  return newVideogame;
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
};
