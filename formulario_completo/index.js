// Recopilamos las áreas de input del formulario.

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const firstLastNameInput = document.getElementById('first_lastname');
const secondLastNameInput = document.getElementById('second_lastname');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const sexV = document.getElementById('sex_v');
const sexM = document.getElementById('sex_m')
const nivelEstudios1 = document.getElementById('nivel_estudios_1');
const nivelEstudios2 = document.getElementById('nivel_estudios_2');
const nivelEstudios3 = document.getElementById('nivel_estudios_3');
const nivelEstudios4 = document.getElementById('nivel_estudios_4');
const nivelEstudios5 = document.getElementById('nivel_estudios_5');
const articulos1 = document.getElementById('articulos_1');
const articulos2 = document.getElementById('articulos_2');
const articulos3 = document.getElementById('articulos_3');
const articulos4 = document.getElementById('articulos_4');
const articulos5 = document.getElementById('articulos_5');
const frecuencia = document.getElementById('frecuencia');
const articuloArchivo = document.getElementById('articulo_archivo');
const comentario = document.getElementById('comentario');
const btnBorrar = document.getElementById('borrar_formulario');

 
let regExName = (a);
let 

// Separamos la función de marcar el PrimerError para no repetir tanto código.
function marcarPrimerError (input) {
  input.focus();
  input.select();
}

// Función de validación del formulario. Enviará true o false dependiendo del resultado de las validaciones.
function validacion() {
  // Con esta variable almacenaremos los mensajes de error.
  let mensajeError = 'Se han encontrado errores: \n';

  // Bandera con la que marcaremos qué campo es el primero al que volver si hay errores.
  let primerError = false;

  // Bandera con la que indicaremos si el formulario ha encontrado errores o no.
  let esValido = true;
  
  // Información personal

  if (!nameInput.value) {
    mensajeError += 'El campo "Nombre" no puede estar vacío.';

    if (!primerError) {
      marcarPrimerError(nameInput);
      primerError = true;
    }
  }
}

// !!!!!! Añadir "Por favor, solucione los errores" al mensaje error al final si hay que enviarlo.
