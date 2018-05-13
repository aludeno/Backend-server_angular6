// 'use strict';
// requires
var express = require('express');
var mongoose = require('mongoose');

// iniciar variables
var app = express();

// CONEXION A la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos : \x1b[32m%s\x1b[0m', 'on line');

});


// rutas

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

// escuchar peticion 
app.listen(3000, function() {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'on line');
});