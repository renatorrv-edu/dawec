//Ejercicio 3

alert("Vamos a medir tu índice de masa corporal.");

let peso = Number(prompt("Introduce tu peso en kilogramos: "));
let altura = Number(prompt("Introduce tu altura en metros: "));

let IMC = peso / altura ** 2;

mensaje = "IMC: " +  IMC.toFixed(2) + ", ";

if (IMC < 18.5) {
    mensaje += "clasificación: bajo peso.";
} else if (IMC >= 18.5 && IMC <= 24.9) {
    mensaje += "clasificación: peso normal."
} else if (IMC >= 25 && IMC <= 29.9) {
    mensaje += "clasificación: sobrepeso."
} else {
    mensaje += "clasificación: obesidad."
}

console.log(mensaje);  