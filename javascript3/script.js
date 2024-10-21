// Ejercicio 1
// Incluído en el archivo HTML.

// Ejercicio 2
// Incluído en el archivo HTML.

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

// Ejercicio 3

let div3_precio = document.getElementById('precio');
let div3_cantidad = document.getElementById('cantidad');
let div3_calcular = document.getElementById('enviar');
let div3_total = document.getElementById('total');

div3_calcular.addEventListener('click', () => calcular(div3_precio.value, div3_cantidad.value));

function calcular(n, m) {
  div3_total.value = n * m;
}

// Ejercicio 4
// Incluído en el HTML.

// Ejercicio 5

