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


console.log(empleado1.informacion())


