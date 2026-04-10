const express = require("express");
const router = express.Router();
const vController = require("../controllers/vController");

router.get("/videogames", vController.getAllVideogames);
router.get("/videogames/:id", vController.getVideogameById);
router.post("/videogames", vController.addVideogame);
router.put("/videogames/:id", vController.updateVideogame);
router.delete("/videogames/:id", vController.deleteVideogame);

module.exports = router;
