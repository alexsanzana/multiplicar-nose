//Requireds existen 3 tipos de requiered
// const fs = require('fs');  esta es una libreria de node
// const fs = require('express'); // no existe en node es un paquete que se instala que alguien m,as iso.
// const fs = require('./mi_paquete');  // archivos que creamos nosostros en nuestro proyecto deberian estar en algun lado de nuestro proyecto.

const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera Archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}