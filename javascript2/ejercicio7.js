//Ejercicio 7

function celsiusAFahrenheit (temperatura) {
  return (temperatura * 9 / 5) + 32;
}

function fahrenheitACelsius (temperatura) {
  return (temperatura - 32) * 5 / 9;
}

alert("Bienvenido al conversor de temperatura. \nElige el tipo de conversión: ");
let menu = Number(prompt("1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius"));

while (menu != 1 && menu != 2) {
  alert("Por favor, elige una opción válida.");
  menu = Number(prompt("1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius"));
}

let temperatura = Number(prompt("Introduce la temperatura a convertir: "));

if (menu == 1) {
  alert(temperatura + " ºC equivalen a " + celsiusAFahrenheit(temperatura).toFixed(2) + " ºF.");
  console.log(temperatura + "ºC equivalen a " + celsiusAFahrenheit(temperatura).toFixed(2) + " ºF.");
} else {
  alert(temperatura + " ºF equivalen a " + fahrenheitACelsius(temperatura).toFixed(2) + " ºC.");
  console.log(temperatura + "ºF equivalen a " + fahrenheitACelsius(temperatura).toFixed(2) + " ºC.");
}