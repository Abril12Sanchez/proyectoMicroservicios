const express = require("express");
const registerUser = require("./registerUser");
const rutaUser = express.Router();

rutaUser.post("/register", async (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: "Email y Contraseña son requeridos"});
    }

    const result = await registerUser(email, password);

    if (result.success){
        res.status(201).json({message: "Usuario creado exitosamente", user: result.user});
    } else {
        res.status(400).json({message: result.message});
    }
});

module.exports = rutaUser;