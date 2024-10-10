//Ejercicio 1

alert("Vamos a calcular los gastos totales del viaje que vas a realizar.");

let alojamiento = Number(prompt("Por favor, ingresa el coste del alojamiento: "));
let alimentacion = Number(prompt("Por favor, ingresa el coste de la alimentación: "));
let entretenimiento = Number(prompt("Por favor, ingresa el coste del entretenimiento: "));

costeTotal = alojamiento + alimentacion + entretenimiento;

if (costeTotal % 1 == 0) { 
  alert("El coste total del viaje es: " + costeTotal + "€.");
  console.log("El coste total del viaje es: " + costeTotal + "€.");
} else {
  alert("El coste total del viaje es: " + costeTotal.toFixed(2) + "€.");
  console.log("El coste total del viaje es: " + costeTotal.toFixed(2) + "€.");
}