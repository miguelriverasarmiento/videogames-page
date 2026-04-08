const vServices = require("../services/vServices"); // El controlador llama al servicio

const getAllVideogames = (req, res) => {
  const videogames = vServices.getAllVideogames();
  res.json(videogames);
};

const getVideogameById = (req, res) => {
  const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id);
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
  const nVideogame = {
    titulo: titulo,
    genero: genero,
    precio: precio,
  };
  const newVideogame = vServices.addVideogame(nVideogame);
  res.status(201).json(newVideogame);
};

const updateVideogame = (req, res) => {
  const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id);
  const { titulo, genero, precio } = req.body;
  const updatedData = {};
  if (titulo) updatedData.titulo = titulo;
  if (genero) updatedData.genero = genero;
  if (precio) updatedData.precio = precio;

  const updatedVideogame = vServices.updateVideogame(id, updatedData);
  if (updatedVideogame) {
    res.json(updatedVideogame);
  } else {
    res.status(404).json({ error: "Videojuego no encontrado" });
  }
};

const deleteVideogame = (req, res) => {
  const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id);
  const deletedVideogame = vServices.deleteVideogame(id);
  if (deletedVideogame) {
    res.json(deletedVideogame);
  } else {
    res.status(404).json({ error: "Videojuego no encontrado" });
  }
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
