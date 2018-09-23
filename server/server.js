require('./config/config');//Al ser el primero hace tood lo de dentro primero.
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//Congifuración global de rutas
app.use(require('./routes/index')); //SE CARGA TODAS LAS RUTAS DENTRO DE INDEX.JS


mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

//ESCUCHA EL PUERTO DEFINIDO EN CONFIG.JS
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto", process.env.PORT);
})