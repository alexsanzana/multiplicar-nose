// al colocar el .argv al final es para obtener acceso al nombre de la funcion directamente 
// asi evitar el tener que llamarla mas adelante argv.argv 
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//siempre de despues de un const o un let vienen {} es decir que es una destructuración
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // los parametros que se estan enviando deben estar definidos en la funcion constante argv. que esta mas arriba.
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // al itilizar el then quiere decir que estare esperando una promesa
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}

// let base = 3;

// este es un nuevo proceso que corre en node y es muy importante es una variable de entorno de node.
// en el process hay algo muy importante llamado argv o argumentos.
// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv.base);
//console.log('limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];