const fs = require('fs');
const colors = require('colors')


let listarTabla = (base, limite = 10) => {
    let data = '';

    console.log('======================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(data);
}




const crearArchivo = async(base, limite = 10) => {

    let data = '';
    if (!Number(base)) {
        throw new Error('La base no es un numero')
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
    });

    return `tabla-${base}.txt`
}

module.exports = {
    crearArchivo,
    listarTabla
}