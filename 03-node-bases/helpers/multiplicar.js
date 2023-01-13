const fs = require('fs');

const crearArchivo = (base = 5, hasta = 10) => {
    const promesa = new Promise((resolve, reject) => {
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index}\n`;
        }
        nameFile = './salida/tabla'+base+'.txt';
        try {
            console.log(salida);
            fs.writeFileSync(nameFile, salida);
        }
        catch (err) {
            reject("ocurrio un error");
        }
        resolve(nameFile);

    });
    return promesa;
}

module.exports = {
    crearArchivo
}