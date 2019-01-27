// Requires: Importacion de librerias para que funcione
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

//Conexión a la db, el puerto es con el que levante la db
mongoose.connection.openUri('mongodb://localhost:27017/HospitalDB', (err, res) => {
    if (err) throw err; //deja de ejecutar lo demas por el error
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

// Rutas
app.get('/', (request, response, next) => {
    response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })
});

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express Server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})