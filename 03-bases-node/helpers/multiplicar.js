const fs = require('fs');
let salida = '';
const crearArchivo = async(base = 5, l) => {
    try {
        for (let i = 0; i < 10; i++) {
            salida += (`${base} x ${i+1} = ${base*(i+1)}\n`);
        }
        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            // console.log(`tabla ${base} creada `);
        });
        fs.writeFileSync(`tabla-sync-${base}.txt`, salida);
        console.log(`tabla-sync ${base} creada`);
        (l == true) ? console.log(salida): console.log('l es falsa');
        return `tabla ${base} y tabla-sync ${base} `;
    } catch (err) {
        throw err;
    }


}
module.exports = {
    crearArchivo
}