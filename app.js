const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs');
const colors = require('colors')

let commando = argv._[0].toLocaleLowerCase()
console.log(argv);


switch (commando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        // console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Arctivo creado', colors.green(archivo)))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}