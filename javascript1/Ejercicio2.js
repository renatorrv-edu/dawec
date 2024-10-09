//Ejercicio 2.1

let num = 22;
let resultado;

if (num > 0) {
  resultado = "El numero es positivo.";
} else if (num < 0) {
  resultado = "El numero es negativo.";
} else {
  resultado = "El numero es cero.";
}

console.log("Ejercicio 2.1: ");
console.log("\nResultado: ");
console.log(resultado);

//Ejercicio 2.2

let edad = 24;
let respuesta;

if (edad >= 18 && edad < 60) {
  respuesta = "La persona es adulta.";
} else if (edad >= 60) {
  respuesta = "La persona es anciana.";
} else if (edad >= 0 && edad < 18) {
  respuesta = "La persona es menor de edad.";
} else {
  respuesta = "La edad no es correcta. Debe ser igual o superior a 0 años."
}

console.log("Ejercicio 2.2: ");
console.log("\nResultado: ");
console.log(respuesta);

//Ejercicio 2.3

console.log("Ejercicio 2.3: ");
console.log("\nResultado: ");

for (let i = 0; i <= 4; i++) {
  console.log("i: " + i);
}

//Ejercicio 2.4

let contador = 0;

console.log("\nEjercicio 2.4: ");
console.log("\nResultado: ");

while (contador <= 4) {
  console.log("Contador: " + contador);
  contador++;
}

//Ejercicio 2.5

let x = 0;

console.log("\nEjercicio 2.5: ");
console.log("\nResultado: ");

do {
  console.log("x: " + x);
  x++;
} while (x <= 4);

//Ejercicio 2.6

console.log("\nEjercicio 2.6: ");
console.log("\nResultado: ");

for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

//Ejercicio 2.7

console.log("\nEjercicio 2.7: ");
console.log("\nResultado: ");

for (let j = 0; j <= 10; j++) {
  if (j === 2) {
    continue;
  }
  console.log(j);
}

//Ejercicio 2.8

let mes = Number(prompt("Por favor, introduce el numero del mes"));
let nombreMes;

while (mes < 1 || mes > 12) {
  alert("Por favor, introduce un numero válido entre el 1 y el 12.");
  mes = Number(prompt("Por favor, introduce el numero del mes"));
}

console.log("\nEjercicio 2.8: ");
console.log("\nResultado: ");

switch(mes) {
  case 1: 
    nombreMes = "Enero";
    break;
  case 2: 
    nombreMes = "Febrero";
    break;
  case 3: 
    nombreMes = "Marzo";
    break;
  case 4: 
    nombreMes = "Abril";
    break;
  case 5:
    nombreMes = "Mayo";
    break;
  case 6:
    nombreMes = "Junio";
    break;
  case 7:
    nombreMes = "Julio";
    break;
  case 8:
    nombreMes = "Agosto";
    break;
  case 9:
    nombreMes = "Septiembre";
    break;
  case 10:
    nombreMes = "Octubre";
    break;
  case 11:
    nombreMes = "Noviembre";
    break;
  case 12:
    nombreMes = "Diciembre";
    break;
  default:
    break;
}

console.log("El mes especificado es: " + nombreMes);
alert("El mes especificado es: " + nombreMes);