const express = require("express");
const authRoutes = require("./middlewares/rutas");
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Servicio de Inicio de seion y Registro en: " + port);
});