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
//Incluído en el HTML.

// Ejercicio 6

document.addEventListener('mousemove', function(event) {
  let x = event.clientX;
  let y = event.clientY;

  document.getElementById('cX').value = x;
  document.getElementById('cY').value = y;
})

// Ejercicio 7

let div7_c1 = document.getElementById('c1');
let div7_c2 = document.getElementById('c2');
let div7_c3 = document.getElementById('c3');

div7_c2.addEventListener('mouseenter', function(event) {
  let elementoAnterior = event.relatedTarget;

  if (elementoAnterior === div7_c1) {
    div7_c2.style.backgroundColor = "red";
  } else if (elementoAnterior === div7_c3) {
    div7_c2.style.backgroundColor = "blue";
  } else {
    div7_c2.style.backgroundColor = "white";
  }
})

// Ejercicio 8

let div8_ficha1 = document.getElementById('ficha1');
let div8_ficha2 = document.getElementById('ficha2');
let div8_ficha3 = document.getElementById('ficha3');

document.addEventListener('keydown', function(event) {
  if (event.key === '1') {
    div8_ficha2.classList.remove("visible");
    div8_ficha3.classList.remove("visible");
    div8_ficha1.classList.toggle("visible");
    div8_ficha1.style.backgroundColor = "#C1E1C1";
  } else if (event.key === '2') {
    div8_ficha1.classList.remove("visible");
    div8_ficha3.classList.remove("visible");
    div8_ficha2.classList.toggle("visible");
    div8_ficha2.style.backgroundColor = "#FAA0A0";
  } else if (event.key === '3') {
    div8_ficha1.classList.remove("visible");
    div8_ficha2.classList.remove("visible");
    div8_ficha3.classList.toggle("visible");
    div8_ficha3.style.backgroundColor = "#A7C7E7";
  }
})

// Ejercicio 9

window.onscroll = function() {
  let div9_boton = document.getElementById('boton');

  if (window.scrollY > window.innerHeight * 10 / 100) {
    div9_boton.style.display = "block";
  } else {
    div9_boton.style.display = "none";
  }
}

// Ejercicio 10

let div10_input = document.getElementById('letras');

div10_input.addEventListener('input', function() {
  //La expresión regular /\d+/ hace referencia a todos los dígitos.
  if (/\d+/.test(div10_input.value)) {
    alert("No se pueden introducir dígitos.");
    div10_input.value = div10_input.value.slice(0, -1);
  }
})