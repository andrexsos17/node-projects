const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs').argv;
const colors = require('colors');

// const [,,arg3 ='base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

const base = argv.base;
const hasta = argv.hasta;

console.log(colors.blue("la base %s"),base);


//const base = 5;
crearArchivo(base,hasta).then(archivo => console.log(archivo))
.catch(err => console.log(err));
