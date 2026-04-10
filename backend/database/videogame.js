const DB = require("./data.json");
const { saveToDatabase } = require("./utils");

const getAllVideogames = () => {
  try {
    const videogames = DB.videogames;
    if (!videogames) {
      throw new Error("No se encontraron videojuegos en la base de datos.");
    }
    return videogames;
  } catch (error) {
    throw {
      status: 500,
      message: "Error fetching videogames: " + error.message,
    };
  }
};

const getVideogameById = (id) => {
  try {
    const videogame = DB.videogames.find((v) => v.id == id);
    if (!videogame) {
      throw new Error(`No se encontró un videojuego con el ID: ${id}`);
    }
    return videogame;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const addVideogame = (videogame) => {
  try {
    const vExist =
      DB.videogames.findIndex((v) => v.name === videogame.name) > -1;
    if (vExist) {
      throw {
        status: 400,
        message: `El videojuego con el nombre "${videogame.name}" ya existe.`,
      };
    }
    DB.videogames.push(videogame);
    saveToDatabase(DB);
    return videogame;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateVideogame = (id, updatedData) => {
  try {
    const index = DB.videogames.findIndex((v) => v.id == id);
    if (index === -1) {
      throw {
        status: 400,
        message: `Videojuego con ID ${id} no encontrado.`,
      };
    }
    DB.videogames[index] = { ...DB.videogames[index], ...updatedData };
    saveToDatabase(DB);
    return DB.videogames[index];
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteVideogame = (id) => {
  try {
    const index = DB.videogames.findIndex((v) => v.id == id);
    if (index === -1) {
      throw {
        status: 400,
        message: `Videojuego con ID ${id} no encontrado.`,
      };
    }
    const deletedVideogame = DB.videogames.splice(index, 1); // Elimina el videojuego y lo devuelve en un array
    saveToDatabase(DB);
    return deletedVideogame[0];
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
