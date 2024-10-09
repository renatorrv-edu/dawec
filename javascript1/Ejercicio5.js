//Ejercicio 5.1

console.log("Ejercicio 5.1");
console.log("\nResultado: \n");

for (let i = 20; i <= 30; i++) {
  console.log(i);
}

//Ejercicio 5.2

console.log("\nEjercicio 5.2");
console.log("\nResultado: \n");

for (let i = 30; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Ejercicio 5.3

console.log("\nEjercicio 5.3");
console.log("\nResultado: \n");

let suma = 0;

for (let i = 1; i <= 50; i++) {
  suma += i;
}

console.log(suma);

//Ejercicio 5.4

console.log("\nEjercicio 5.4");
console.log("\nResultado: \n");

for (let i = 1; i <= 10; i++) {
  console.log(8 + " x " + i + " = " + (8 * i));
}

//Ejercicio 5.5

const plantas = ["Cactus", "Bonsai", "Rosa", "Helecho", "Hiedra"];

console.log("\nEjercicio 5.5");
console.log("\nResultado: \n");

for (let i = 0; i < plantas.length; i++) {
  console.log(plantas[i]);
}

//Ejercicio 5.6

let altura = 9;

console.log("\nEjercicio 5.6");
console.log("\nResultado: \n");

for (let i = 1; i <= altura; i++) {
  let piso = "";

  for (let j = 1; j <= altura - i; j++) {
    piso += " ";
  }

  for (let k = 1; k <= (2 * i - 1); k++) {
    piso += "*";
  }

  console.log(piso);
}

//Ejercicio 5.7

let sumaPares = 0;

console.log("\nEjercicio 5.7");
console.log("\nResultado: \n");

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    sumaPares += i;
  }
}

console.log(sumaPares);

//Ejercicio 5.8

console.log("\nEjercicio 5.8");
console.log("\nResultado: \n");

for (let i = 30; i >= 20; i--) {
  console.log(i);
}

//Ejercicio 5.9

function calcularPromedio(numeros) {
  let sumaNumeros = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    sumaNumeros += numeros[i];
  }

  return sumaNumeros / numeros.length;
}

let numeros = [5, 29, 1, 25, 34];
let promedio = calcularPromedio(numeros);

console.log("\nEjercicio 5.9");
console.log("\nResultado: \n");
console.log(promedio);