//Destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

const colors = require('colors');

//let base = 'abc';

//console.log(multiplicar);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log('Limite', argv.limite);
//console.log(argv2);

//console.log(base);

console.log(argv);

let comando = argv._[0];

//console.log(comando);

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + colors.green(`${archivo}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));*/