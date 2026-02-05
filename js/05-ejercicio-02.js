/*CuentaBancaria

🧱 Simula una cuenta bancaria. Crear una clase CuentaBancaria que permita:

guardar un saldo

depositar dinero

retirar dinero

consultar el saldo

Atributos

titular

saldo

Métodos

depositar(monto)

retirar(monto)

mostrarSaldo() */

class CuentaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto <= 0) {
      return "El monto a depositar debe ser mayor a 0";
    }
    this.saldo += monto;
    return `Deposito exitoso. Nuevo Saldo: ${this.saldo}`
  }

  mostrarSaldo(){
    return `
    Saldo actual de ${this.titular} es: ${this.saldo}
    `
  }
}


const cuenta1 = new CuentaBancaria("Walter", 1000)

console.log(cuenta1.depositar(500))
console.log(cuenta1.depositar(500))
console.log(cuenta1.depositar(3000))