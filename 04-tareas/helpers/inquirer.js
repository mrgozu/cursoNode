const inquirer = require('inquirer');

require('colors');
const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Seleccione Opcion',
    choices: [{
            value: '1',
            name: `${'1.'.green} Crear tarea`
        },
        {
            value: '2',
            name: `${'2.'.green} Listar Tareas`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar Tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.green} Listar Tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green} Completar Tareas`
        },
        {
            value: '6',
            name: `${'6.'.green} Borrar Tareas`
        },
        {
            value: '0',
            name: `${'0.'.green} Salir`
        }
    ],

}];
const inquireMenu = async() => {
    // console.clear();
    console.log('========================'.green);
    console.log('   Seleccione una opcion   '.cyan);
    console.log('========================'.green);
    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
};

const pausa = async() => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar`
    }];
    await inquirer.prompt(question);
}
const leerInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Ingrese un valor'
            }
            return true;
        }
    }];
    const { desc } = await inquirer.prompt(question);
    return desc;
};


module.exports = {
    inquireMenu,
    pausa,
    leerInput
};