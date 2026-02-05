/* let empleado = {
  nombre: "Juan",
  apellido: "Perez",
  cargo: "Desarrollador",
  salario: 7000,
  direccion: "Yerbas Buenas",
  anioNacimiento: 1998,
};
 */

class Empleado {
  constructor(nombre, apellido, cargo, salario, direccion, anioNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
    this.direccion = direccion;
    this.anioNacimiento = anioNacimiento;
  }
  calcularEdad() {
    let anio_actual = new Date().getFullYear();
    return anio_actual - this.anioNacimiento;
  }
  crearEmail() {
    let email = (
      this.nombre +
      "." +
      this.apellido +
      "@motion.com"
    ).toLowerCase();

    return email
  }
  informacion(){
    return `
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Email: ${this.crearEmail()}
    Edad: ${this.calcularEdad()}
    Salario: ${this.salario}
    Direccion: ${this.direccion}
    AnioNacimiento: ${this.anioNacimiento}
    
    `
  }
}

const empleado1 = new Empleado("Armin", "Contreras", "Gerente", "200000", "Viña", "1980")
const empleado2 = new Empleado("Maria", "Torres", "ingeniera", "15000", "Calle 456", "1990");
const empleado3 = new Empleado("Pedro", "Gutierrez", "gerente", "18000", "Calle 789", "1980");
const empleado4 = new Empleado("Ana", "Hernandez", "secretaria", "11000", "Calle 012", "1970");

let empleados = []


empleados.push(empleado1)

empleados.push(empleado2)

empleados.push(empleado3)

empleados.push(empleado4)

//console.log(empleados)




empleados.forEach((empleado)=>{
    console.log(empleado.informacion())
})