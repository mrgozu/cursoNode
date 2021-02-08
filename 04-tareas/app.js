const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquireMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

//const { mostrarMenu, pausa } = require('./helpers/mensajes');
require('colors');
const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if (tareasDB) {
        //establecer tareas
        tareas.cargarTareasFromArray(tareasDB);

    }
    do {
        opt = await inquireMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log(tareasDB);
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt !== '0');


    // pausa();
}


// const pausa = () => {
//     return new Promise(resolve => {
//         const readline = require('readline').createInterface({
//             input: process.stdin,
//             // output: process.stdout
//         });
//         readline.question(`Presione ${'Enter'.green} para continuar `, (opt) => {

//             readline.close();
//             resolve();
//         })
//     })

// }
main();