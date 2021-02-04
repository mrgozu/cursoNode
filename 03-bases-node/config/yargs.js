const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        return true; // sin esto, no funciona por el comando de arriba de "demandOption"
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        default: 'false'
    })
    .argv;
module.exports = argv;