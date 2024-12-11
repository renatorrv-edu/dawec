// Recopilamos las áreas de input del formulario que vamos a utilizar.

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const firstLastNameInput = document.getElementById('first_lastname');
const secondLastNameInput = document.getElementById('second_lastname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const comentario = document.getElementById('comentario');
const borrarBtn = document.getElementById('borrar_formulario');

// Expresiones regulares que usaremos para las comprobaciones.
let regExNames = new RegExp(/^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/);
let regExPasswords = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,10}$/);
let regExEmails = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
let regExPhones = new RegExp(/^\d{3}\s\d{2}\s\d{2}\s\d{2}$/);
let regExComments = new RegExp(/^.{0,200}$/);

// Separamos la función de marcar el PrimerError para no repetir tanto código.
function marcarPrimerError (input) {
  input.focus();
  input.select();
}

// Función de validación del formulario. Enviará true o false dependiendo del resultado de las validaciones.
function validacion() {
  // Con esta variable almacenaremos los mensajes de error.
  let mensajeError = 'Se han encontrado los siguientes errores: \n\n';

  // Bandera con la que marcaremos qué campo es el primero al que volver si hay errores.
  let primerError = false;

  // Bandera con la que indicaremos si el formulario ha encontrado errores o no.
  let esValido = true;
  
  // Información personal

  if (!nameInput.value) {
    mensajeError += '- El campo "Nombre" no puede estar vacío.\n';

    if (!primerError) {
      marcarPrimerError(nameInput);
      primerError = true;
    }

    esValido = false;
  } else if (!regExNames.test(nameInput.value)) {
    mensajeError += '- El nombre debe componerse por letras y comenzar con una mayúscula.\n';
    
    if (!primerError) {
      marcarPrimerError(nameInput);
      primerError = true;
    }

    esValido = false;
  }

  if (!firstLastNameInput.value) {
    mensajeError += '- El campo "Primer apellido" no puede estar vacío.\n';

    if (!primerError) {
      marcarPrimerError(firstLastNameInput);
      primerError = true;
    }

    esValido = false;
  } else if (!regExNames.test(firstLastNameInput.value)) {
    mensajeError += '- El primer apellido debe componerse por letras y comenzar con una mayúscula.\n';
    
    if (!primerError) {
      marcarPrimerError(firstLastNameInput);
      primerError = true;
    }

    esValido = false;
  }

  if (!secondLastNameInput.value) {
    mensajeError += '- El campo "Segundo apellido" no puede estar vacío.\n';

    if (!primerError) {
      marcarPrimerError(secondLastNameInput);
      primerError = true;
    }

    esValido = false;
  } else if (!regExNames.test(secondLastNameInput.value)) {
    mensajeError += '- El segundo apellido debe componerse por letras y comenzar con una mayúscula.\n';
    
    if (!primerError) {
      marcarPrimerError(secondLastNameInput);
      primerError = true;
    }

    esValido = false;
  }
  
  if (!phoneInput.value) {
    mensajeError += '- El campo "Teléfono" no puede estar vacío.\n';

    if (!primerError) {
      marcarPrimerError(phoneInput);
      primerError = true;
    }

    esValido = false;
  } else if (!regExPhones.test(phoneInput.value)) {
    mensajeError += '- El teléfono debe estar compuesto solo por números en el siguiente formato: 123 33 33 33.\n';
    
    if (!primerError) {
      marcarPrimerError(phoneInput);
      primerError = true;
    }

    esValido = false;
  }

  if (!emailInput.value) {
    mensajeError += '- El campo "Email" no puede estar vacío.\n';

    if (!primerError) {
      marcarPrimerError(emailInput);
      primerError = true;
    }

    esValido = false;
  } else if (!regExEmails.test(emailInput.value)) {
    mensajeError += '- El email debe seguir el siguiente formato: ejemplo@ejemplo.com\n';
    
    if (!primerError) {
      marcarPrimerError(emailInput);
      primerError = true;
    }

    esValido = false;
  }

  if (!passwordInput.value) {
    mensajeError += '- El campo "Contraseña" no puede estar vacío.\n';

    if (!primerError) {
      marcarPrimerError(passwordInput);
      primerError = true;
    }

    esValido = false;
  } else if (!regExPasswords.test(passwordInput.value)) {
    mensajeError += '- La contraseña debe tener entre 6 y 10 dígitos. También debe contar al menos con una mayúscula, una minúscula y un dígito.\n';
    
    if (!primerError) {
      marcarPrimerError(passwordInput);
      primerError = true;
    }

    esValido = false;
  }

  // Datos sobre la revista:

  if (!comentario.value) {
    mensajeError += '- El campo "Comentario" no puede estar vacío.\n';

    if (!primerError) {
      marcarPrimerError(comentario);
      primerError = true;
    }

    esValido = false;
  } else if (!regExComments.test(comentario.value)) {
    mensajeError += '- El comentario no puede contar con más de 200 caracteres.\n';
    
    if (!primerError) {
      marcarPrimerError(comentario);
      primerError = true;
    }

    esValido = false;
  }

  if (esValido) {
    alert('Datos enviados correctamente');
    form.reset();
    return true;
  } else {
    mensajeError += '\nPor favor, solucione los errores mencionados antes de continuar.'
    alert(mensajeError);
    return false;
  }
}

// Añadimos este Event Listener para poder enviar cuando queramos el formulario con la combinación de teclas Ctrl + Intro.

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'Enter') {
    validacion();
  }
});

// Añadimos este otro evento para que volvamos al comienzo de la página cuando usemos el botón de reiniciar el formulario.

borrarBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});