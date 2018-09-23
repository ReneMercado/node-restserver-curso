const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const app = express();


app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }

        //COMPARA LAS CONTRASEÑA ENCRIPTADA VS ENVIADA AL SERVICIO , RETORNANDO TRUE/FALSE
        if (bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }

        //SEED es para verificar que concida el secret del token con el secret del server.
        let token = jwt.sign({
            usuario: usuario
        }, process.env.SEED, { expiresIn: CADUCIDAD_TOKEN }); //Expirara en 30 dias

        res.json({
            ok: true,
            usuario: usuarioDB,
            token: token
        });

    });

});






module.exports = app;
