const vServices = require("../services/vServices"); // El controlador llama al servicio

const getAllVideogames = async (req, res) => {
  try {
    const videogames = await vServices.getAllVideogames();
    res.json(videogames);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getVideogameById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "ID del videojuego es requerido" },
    });
    return;
  }
  try {
    const videogame = await vServices.getVideogameById(id);
    res.send({ status: "OK", data: videogame });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const addVideogame = async (req, res) => {
  const { titulo, imagen, descripcion, genero, plataforma, precio } = req.body;
  if (!titulo || !genero || !plataforma || !precio) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Todos los campos son requeridos" },
    });
    return;
  }
  try {
    const newVideogame = await vServices.addVideogame({
      titulo,
      imagen,
      descripcion,
      genero,
      plataforma,
      precio,
    });
    res.status(201).send({ status: "OK", data: newVideogame });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateVideogame = async (req, res) => {
  const { id } = req.params;
  const { titulo, imagen, descripcion, genero, plataforma, precio } = req.body;
  const updatedData = {};
  if (titulo) updatedData.titulo = titulo;
  if (imagen) updatedData.imagen = imagen;
  if (descripcion) updatedData.descripcion = descripcion;
  if (genero) updatedData.genero = genero;
  if (plataforma) updatedData.plataforma = plataforma;
  if (precio) updatedData.precio = precio;

  try {
    const updatedVideogame = await vServices.updateVideogame(id, updatedData);
    res.send({ status: "OK", data: updatedVideogame });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteVideogame = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "ID del videojuego es requerido" },
    });
  }
  try {
    await vServices.deleteVideogame(id);
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
