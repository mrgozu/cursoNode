const empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id) => {


    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id);

        (empleado) ? resolve(empleado.nombre): reject(`No existe empleado con id ${ id }`);
    });
}

const getSalario = () => {
    return new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id);

        (salario) ?
        resolve(salario.salario): reject(`No existe salario con id ${ id }`);
    });
}


const getInfoUsuario = async(id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }

};


const id = 4;
getInfoUsuario(id)
    .then(msg => {
        console.log('todo bien');
        console.log(msg);
    })
    .catch(err => {
        console.log('todo mal');
        console.log(err);

    })