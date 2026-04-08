const express = require("express");
const router = express.Router();
const vController = require("../controllers/vController");

router.get("/videogames", vController.getAllVideogames);
router.get("/videogames/:id", vController.getVideogameById);
router.post("/videogames", vController.addVideogame);

module.exports = router;
