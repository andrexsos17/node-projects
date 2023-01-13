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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find (e=> e.id === id )

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }
}

getEmpleado(4, (err,empleado) => {
    if( err ){
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('Empleado existe!');
    console.log(empleado);
})
