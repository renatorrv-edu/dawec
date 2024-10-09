//Ejercicio 4.1 

function findLargestNumber(numeros) {
  let mayorNumero = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorNumero) {
      mayorNumero = numeros[i];
    }
  }

  return mayorNumero;
}

let cantidad = Number(prompt("Por favor, introduce la cantidad de números que quieres introducir y que sean al menos dos: "));

while (isNaN(cantidad) || cantidad <= 1) {
  cantidad = Number(prompt("Por favor, introduce la cantidad de números que quieres introducir y que sean al menos dos: "));
}

const numeros = [];

for (let i = 0; i < cantidad; i++) {
  let numero = Number(prompt("Por favor, introduce el número de la " + (i + 1) + "ª posición: "));

  while (isNaN(numero)) {
    numero = Number(prompt("Ha habido un error. Por favor, introduce el número de la " + (i + 1) + "ª posición: "));
  }

  numeros.push(numero);

}

let mayorNumero = findLargestNumber(numeros);

alert("El número más alto de la lista es: " + mayorNumero + ".");
console.log("El número más alto de la lista es: " + mayorNumero + ".");