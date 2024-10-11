//Ejercicio 8

function calculateFactorial (n) {

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

alert("Vamos a calcular el factorial de un número.");

let n = parseInt(prompt("Por favor, introduce un número entero positivo."));

while (Number.isNaN(n) || n < 0) {
  alert("Entrada inválida.");
  n = parseInt(prompt("Por favor, introduce un número entero positivo."));
}

alert("El factorial de " + n + " equivale a: " + calculateFactorial(n) + ".");
console.log("El factorial de " + n + " equivale a: " + calculateFactorial(n) + ".");