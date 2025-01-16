let mensaje = '';

let enlaces = document.querySelectorAll('a');
let numeroEnlaces = enlaces.length;

mensaje += "Número de enlaces de la página: " + numeroEnlaces;

let direccionPenultimo = enlaces[numeroEnlaces - 2].href;

mensaje += "\nDirección a la que enlaza el penúltimo enlace: " + direccionPenultimo;

let numEnlacesPrueba = 0;

for (let i = 0; i < enlaces.length; i++) {
  if (enlaces[i].href === 'http://prueba/') {
    numEnlacesPrueba++;
  }
}

mensaje += "\nNúmero de enlaces que enlazan a http://prueba: " + numEnlacesPrueba;

let parrafoTres = document.querySelectorAll('p')[2];
let enlacesParrafoTres = parrafoTres.querySelectorAll('a').length;

mensaje += "\nNúmero de enlaces del tercer párrafo: " + enlacesParrafoTres;

console.log(mensaje);
alert(mensaje);
