const fs = require('fs');
const colors = require('colors');


// el = 10 es un valor por defecto
let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);

    console.log(`=== Tabla de ${base} ===`.yellow);

    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i}  =  ${ base * i }`);
    }

}

// otra forma de hacerlo es cambiar el el por 
//module.exports.crearArchivo = (base) => {
// esto tambien funcionaria pero es mejor como se definio abajo ya que se puede agregar mas modulos 
// dentro de la mism a definicion.
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un numero`);
            return; // recuerden que el reject sigue ejecutando el codigo por eso va un return.
        }
        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un numero`);
            return; // recuerden que el reject sigue ejecutando el codigo por eso va un return.
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} =  ${base * i}\n`;
        }

        //fs.writeFile(file, data[, options], callback)
        //  file = nombre del archivo o path, data = lo que quermos grabar, opciones = como utf-8 etc,
        // callback = enviamos un callback para saber si lo iso o no
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })

}


// el modulo es un objeto global que esta disponible a lo largo de toda la aplicacion.
// lo bueno de esta forma de declarar los modulos es que se pueden declarar varios al mismo tiempo.
module.exports = {
        crearArchivo,
        listarTabla
        /*    crearArchivo,
           crearArchivo,
           crearArchivo, */
    }
    // esta es una forma de hacerlo. donde no es necesario darle valor a la propiedad crearArchivo
    // lo asimila de forma automatica.