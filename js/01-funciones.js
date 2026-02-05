const nums = [1, 2, 3, 4];

const doble = nums.map((item) => {
  return `${item}++`;
});

//console.log(doble)

//funcion declarativa
function sumar(a, b) {
  return a + b;
}

//console.log(sumar(10, 12));

const sumar2 = (a, b) => a + b;

const saludar = (nombre) => `Hola buenas tardes ${nombre}`;

const saludar3 = nombre => "hola buenas tardes " + nombre

console.log(saludar("Maria"));

console.log(sumar2(15, 17));

console.log(saludar3("Javiera"));

let nombre = "Susana"
let apellido = "Rodriguez"

let nombreCompleto = "tu nombre es: " + nombre + " y tu apellido es: " +  apellido

let nombreCompleto2 = `Tu nombre es: ${nombre} y tu apellido es: ${apellido}` 

console.log(nombreCompleto)
console.log(nombreCompleto2)