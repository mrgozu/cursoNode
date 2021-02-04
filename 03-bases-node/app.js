const { number, options, boolean } = require('yargs');
//const yargs = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();



//console.log(base);
//const base = 12;



// console.log(process.argv);
// console.log(argv);
console.log('yargs ', argv);
console.log('base de yargs ', argv.base);
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


//Versiones anteriores
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));




// let salida = '';
// let base = 11;
//console.clear();
// for (let i = 0; i < 10; i++) {
//     salida += (`${base} x ${i+1} = ${base*(i+1)}\n`);
// }
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`tabla ${base} creada `);
// });
// fs.writeFileSync(`tabla-sync-${base}.txt`, salida);
// console.log(`tabla-sync ${base} creada`);