const usuario= {
    nombre: "Juan",
    apellido: "Perez",
    email: "juanperez@gmail.com",
    cargo: "Desarrollador"

}

//console.log(empleado)

/* let usuario = empleado.nombre

let apellido = empleado.apellido

let nombreCompleto = usuario + " " +  apellido
let nombreCompleto2 = `${usuario} ${apellido}`
console.log(nombreCompleto)
console.log(nombreCompleto2) */

//destructuring

const {nombre, apellido, email, cargo} = usuario

let nombreCompleto2 = `${nombre} ${apellido}`
console.log(nombreCompleto2)