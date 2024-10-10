//Ejercicio 4

function calcularPrecioFinal(precioOrig, descuento) {
  let porcentaje = precioOrig / 100;
  return precioOrig - (porcentaje * descuento);
}

alert("Vamos a ayudarte a calcular el precio final de un producto con descuento: ");

let precioOrig = Number(prompt("Introduce el precio original del producto:"));
let descuento = Number(prompt("Introduce el porcentaje de descuento a aplicar: "));

let precioFinal = calcularPrecioFinal(precioOrig, descuento);

alert("El precio final, después de aplicar el descuento del " + descuento + "% es: " + precioFinal + " euros.");
console.log("El precio final, después de aplicar el descuento del " + descuento + "% es: " + precioFinal + " euros.");