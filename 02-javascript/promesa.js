const empleados = [
    {
        id:1,
        nombre:'Juan'
    },
    {
        id:2,
        nombre:'Lucas'
    },
    {
        id:3,
        nombre:'Pedro'
    }
];

const salario = [
    {
        id:1,
        nombre:1000
    },
    {
        id:2,
        nombre:1200
    }
];

const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject)=>{
        const empleado = empleados.find (e => e.id === id )?.nombre

        if (empleado){
            resolve(empleado);
        }else{
            reject(`No existe empleado con id ${ id }`);
        }
    });
return promesa;
}

getEmpleado(4)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));
