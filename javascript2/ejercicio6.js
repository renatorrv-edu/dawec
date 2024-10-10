//Ejercicio 6

function fibonacci (cantidad) {
  if (cantidad == 1) {
    return [0];
  }

  if (cantidad == 2) {
    return [0, 1];
  }

  let aux1 = 0;
  let aux2 = 1;
  let aux3 = 0;

  let numeros = [];

  numeros.push(aux1);
  numeros.push(aux2);

  for (let i = 2; i < cantidad; i++) {
    aux3 = aux1 + aux2;
    numeros.push(aux3);
    aux1 = aux2;
    aux2 = aux3;
  }

  return numeros;
}

alert("Por favor, indica la cantidad de números de la secuencia de Fibonacci que quieres ver: ");

let cantidad =  Number(prompt("Ingresa la cantidad (un numero entero positivo) : "));

while (cantidad < 0) {
  alert("Por favor, introduce un número entero positivo: ")
  cantidad =  Number(prompt("Ingresa la cantidad (un numero entero positivo) : "));
}

console.log(fibonacci(cantidad));