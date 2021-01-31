//El setTimeout es non-blocking
console.log('inicio');
setTimeout(() => {
    console.log('primer timeout');
}, 3000);
setTimeout(() => {
    console.log('segundo timeout');
}, 3000);
setTimeout(() => {
    console.log('tercer timeout');
}, 3000);
console.log('fin de programa');

/*
                inicio
                fin de programa
                primer timeout
                segundo timeout
                tercer timeout
*/