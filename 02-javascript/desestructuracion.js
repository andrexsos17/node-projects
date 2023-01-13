const deadpool = {
    nombre: "juan",
    apellido: 'wiston',
    poder: 'regeneración',
    getNombre(){
        return `${nombre} ${apellido}`;
    }
}

const nombre1 = deadpool.nombre;
const apellido = deadpool.apellido;
console.log(nombre1, apellido);

//desestructuración
const { nombre, poder} = deadpool;
console.log(nombre, poder);

