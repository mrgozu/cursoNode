// setTimeout(() => {
//     console.log('hola mundo');
// }, 1000)

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Marcos'
    }
    setTimeout(() => {
        callback(usuario);
    }, 1000);
}


getUsuarioByID(10, (usuario) => {
    console.log(usuario);
});


// los callbacks son una funcion que se envia como argumento