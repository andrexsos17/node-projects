var nombre = "Wolverine";
console.log(nombre);

let apellido = "Perez";
if(true){
    //se puede declarar otro let en otro ambito
    let apellido = "Peres";
    console.log(apellido);
}
// no se puede volver a declarar
// let apellido ="aa";
apellido = "Pereziño"
console.log(apellido);
const apellido2 = "Sosa";
// falla pues es una constante
// apellido2 = "Sossa";
console.log(apellido);