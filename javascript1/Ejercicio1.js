//Ejercicio 1.1

let saludo = "Hola, mundo.";

console.log("Ejercicio 1.1: ");
console.log("Mensaje: ");
console.log(saludo);

//Ejercicio 1.2

let edad = 33;

console.log("\nEjercicio 1.2");
console.log("Edad: ");
console.log(edad);

//Ejercicio 1.3

let casado = true;

console.log("\nEjercicio 1.3");
console.log("Casado: ");
console.log(casado);

//Ejercicio 1.4

let indefinido;
let nulo = null;

console.log("\nEjercicio 1.4");
console.log("\nIndefinido: ");
console.log(indefinido);
console.log("\nNulo: ");
console.log(nulo);

//Ejercicio 1.5

const MAGQ24 = {
    name: "MSI MAGQ24",
    price: 249.98,
    category: "Monitor"
}

console.log("\nEjercicio 1.5");
console.log("Objeto MAGQ24: ");
console.log(MAGQ24);

//Ejercicio 1.6

const ciudades = [
    "Madrid",
    "Tokio",
    "Nueva York",
    "Beijing",
    "Melbourne"
];

console.log("\nEjercicio 1.6");
console.log("Ciudades:");
console.log(ciudades);

//Ejercicio 1.7

let colorFav= "Amarillo";

console.log("\nEjercicio 1.7");
console.log("Color Favorito: ");
console.log(colorFav);

colorFav = "Naranja";

console.log("\nNuevo color favorito: ");
console.log(colorFav);

//Ejercicio 1.8

let valorIndef;
let valorNulo = null;

console.log("\nEjercicio 1.8");
console.log("Valor Indefinido: ");
console.log(valorIndef);

console.log("\nValor Nulo: ");
console.log(valorNulo);

//Ejercicio 1.9

let ingrediente = "Pepino";

function ensalada() {
    let ingrediente = "Tomate";
    return console.log(ingrediente);
}

console.log("\nEjercicio 1.9");
console.log("Variable: ");
console.log(ingrediente);

console.log("\nVariable de la funcion:");
ensalada();

//Ejercicio 1.10

let $variableValida1 = 1;
let _variableValida2 = 2;
let variableValida3 = 3;

//Dejo las variables inválidas en comentario para poder correr el programa. Si no, crashea.
//let variable Invalida 1 = "A";
//let if = "B";

console.log("\nEjercicio 1.10");
console.log("\nVariables válidas: ");
console.log($variableValida1 + "\n" + _variableValida2 + "\n" + variableValida3);
//console.log("\n" + variable Invalida 1 + "\n" + if);

//Ejercicio 1.11

let x = 5, y = 3;

console.log("\nEjercicio 1.11" + "\n");
console.log("X = " +  x, "Y = " + y);
console.log("X + Y =", x + y);
console.log("X - Y = " , x - y);
console.log("X * Y = " , x * y);
console.log("X / Y = " , x / y);
console.log("X % Y = " , x % y);
console.log("X++ = " , ++x);
console.log("X-- =" , --y);

//Ejercicio 1.12

let cadena = " \tLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin auctor augue, a accumsan lectus vulputate quis. Sed at ullamcorper ipsum. Etiam aliquet massa ac elit sodales sagittis. Cras lacus nunc, euismod vitae interdum quis, pharetra a purus. Fusce finibus sodales ullamcorper. \n\tDonec quis varius velit. Etiam vel efficitur risus, vitae aliquam dui. Nulla sodales, risus eu viverra convallis, leo nulla sodales enim, vel auctor tellus nibh quis odio. Fusce id aliquam orci. \nNulla non dolor nulla. Nam ut nibh vel nulla vulputate sodales eget ut est. Nullam sed aliquam enim, quis congue nisi. "
console.log("\nEjercicio 1.12");
console.log(cadena);