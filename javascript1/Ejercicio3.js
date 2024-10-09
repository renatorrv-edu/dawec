//Ejercicio 3.1

function calcularArea(radio) {
  return Math.PI * radio ** 2;
}

function calcularPerimetro(radio) {
  return 2 * Math.PI * radio;
}

alert("Vamos a calcular el área de un círculo.");

let radio = Number(prompt("Por favor, ingresa el radio del círculo."));

while (isNaN(radio) || radio <= 0) {
  alert("Por favor, introduce un número positivo.");
  radio = Number(prompt("Por favor, ingresa el radio del círculo."));
}

let area = calcularArea(radio);
let perimetro = calcularPerimetro(radio);

console.log("Ejercicio 3.1: ");
console.log("\nResultado: ");

console.log("El área es: " + area);
alert("El área es: " + area);

console.log("El perímetro es: " + perimetro);
alert("El perímetro es: " + perimetro);

//Ejercicio 3.2

function calculatePower (base, exponent) {
  return base ** exponent;
}

let base = 2;
let exponent = 3;

resultado = calculatePower(base, exponent);

console.log ("\nEjercicio 3.2");
console.log("\nResultado: ");
console.log(resultado);