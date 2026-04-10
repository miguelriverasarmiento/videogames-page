const vServices = require("../services/vServices"); // El controlador llama al servicio

const getAllVideogames = (req, res) => {
  try {
    const videogames = vServices.getAllVideogames();
    res.json(videogames);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getVideogameById = (req, res) => {
  const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id);
  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "ID del videojuego es requerido" },
    });
  }
  try {
    const videogame = vServices.getVideogameById(id);
    res.send({ status: "OK", data: videogame });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const addVideogame = (req, res) => {
  const { titulo, genero, precio } = req.body;
  if (!titulo || !genero || !precio) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Título, género y precio son requeridos" },
    });
    return;
  }
  const nVideogame = {
    titulo: titulo,
    genero: genero,
    precio: precio,
  };
  try {
    const newVideogame = vServices.addVideogame(nVideogame);
    res.status(201).send({ status: "OK", data: newVideogame });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateVideogame = (req, res) => {
  const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id);
  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "ID del videojuego es requerido" },
    });
  }
  try {
    const { titulo, genero, precio } = req.body;
    const updatedData = {};
    if (titulo) updatedData.titulo = titulo;
    if (genero) updatedData.genero = genero;
    if (precio) updatedData.precio = precio;
    const updatedVideogame = vServices.updateVideogame(id, updatedData);
    res.send({ status: "OK", data: updatedVideogame });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteVideogame = (req, res) => {
  const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id);
  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "ID del videojuego es requerido" },
    });
  }
  try {
    vServices.deleteVideogame(id);
    res.status(204).json({ message: "Videojuego eliminado exitosamente" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  addVideogame,
  updateVideogame,
  deleteVideogame,
};
