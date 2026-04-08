const vServices = require("../services/vServices"); // El controlador llama al servicio

const getAllVideogames = (req, res) => {
  const videogames = vServices.getAllVideogames();
  res.json(videogames);
};

const getVideogameById = (req, res) => {
  const id = parseInt(req.params.id);
  const videogame = vServices.getVideogameById(id);
  if (videogame) {
    res.json(videogame);
  } else {
    res.status(404).json({ error: "Videojuego no encontrado" });
  }
};

const addVideogame = (req, res) => {
  const { titulo, genero, precio } = req.body;
  if (!titulo || !genero || !precio) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }
  const newVideogame = vServices.addVideogame({ titulo, genero, precio });
  res.status(201).json(newVideogame);
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
};
