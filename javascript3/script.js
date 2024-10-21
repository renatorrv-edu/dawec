// Ejercicio 1

// Ejercicio 2

let div2_1 = document.getElementById('divHover');

div2_1.addEventListener('mouseover', color);
div2_1.addEventListener('mouseleave', colorBlanco)

function color() {
  let div2_2 = document.getElementById('efecto');
  div2_2.style.background = '#A6E999';
}

function colorBlanco() {
  let div2_2 = document.getElementById('efecto');
  div2_2.style.background = '#FFFFFF';
}