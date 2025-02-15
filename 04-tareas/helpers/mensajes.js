const { read, promises } = require('fs');

require('colors');


const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('========================'.green);
        console.log('   Seleccione una opcion   '.green);
        console.log('========================'.green);
        console.log(` ${'1.'.green} Crear `);
        console.log(` ${'2.'.green} Listar `);
        console.log(` ${'3.'.green} Listar Completas `);
        console.log(` ${'4.'.green} Listar pendientes `);
        console.log(` ${'5.'.green} Completar  `);
        console.log(` ${'6.'.green} Borrar `);
        console.log(` ${'0.'.green} Salir `);
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Seleccione Opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })

}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`Presione ${'Enter'.green} para continuar `, (opt) => {

            readline.close();
            resolve();
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
};