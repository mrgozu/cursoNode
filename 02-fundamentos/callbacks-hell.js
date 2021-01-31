const empleados = [{
        id: 1,
        nombre: 'Marcos'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Pedro'
    },
];
const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((empleado) => empleado.id === id);
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con ID ${ id } no existe`);

    }

};
getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    console.log('El empleado existe');
    console.log(empleado);
})

const getSalario = (id, callback) => {
    const salario = salarios.find((salario) => salario.id === id);
    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con ID ${ id } no existe`);

    }

};

getSalario(3, (err, salario) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    console.log('El salario existe');
    console.log(salario);
})