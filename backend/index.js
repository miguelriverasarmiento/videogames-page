const express = require("express");
const vRoutes = require("./routes/vRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", vRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
