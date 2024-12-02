// Variables con los elementos del formulario

let form = document.getElementById('form');
let formName = document.getElementById('name');
let formPassword = document.getElementById('password');
let formTown = document.getElementById('town');
let formSubmit = document.getElementById('signup');

// Contenedores de mensajes de error

let formNameError = document.getElementById('nameError');
let formPasswordError = document.getElementById('passwordError');
let formTownError = document.getElementById('townError');

let regExName = new RegExp(/^[^\s]{8,}$/);
let regExPassword = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,10}$/);

function validarError(input, mensaje) {
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');

  mensaje.classList.remove('text-success');
  mensaje.classList.add('text-danger');
}

function validarExito(input, mensaje) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');

  mensaje.classList.remove('text-danger');
  mensaje.classList.add('text-success');
}

// Comprobamos cada campo del formulario cuando se le dé a "Registrar". Mostraremos los errores, si los hubiese. Si no los hay, el formulario se enviará.

form.addEventListener('submit', function(event) {
  // Prevenimos que el formulario se envíe directamente antes de realizar las comprobaciones.

  event.preventDefault();

  // Con esta variable comprobaremos al final de todas las comprobaciones si el formulario se puede enviar o no.
  
  let valid = true;

  if (!formName.value) {
    validarError(formName, formNameError);
    formNameError.textContent = 'El campo "Nombre" no puede estar vacío.';
    valid = false;
  } else if (!regExName.test(formName.value)) {
    validarError(formName, formNameError);
    formNameError.textContent = 'El campo "Nombre" debe contar con al menos 8 caracteres. No se permiten espacios en blanco.';
    valid = false;
  } else {
    validarExito(formName, formNameError);
    formNameError.textContent = "";
  }

  if(!formPassword.value) {
    validarError(formPassword, formPasswordError);
    formPasswordError.textContent = 'El campo "Contraseña" no puede estar vacío.';
    valid = false;
  } else if (!regExPassword.test(formPassword.value)) {
    validarError(formPassword, formPasswordError);
    formPasswordError.textContent = 'El campo "Contraseña" debe tener entre 6 y 10 caracteres alfanuméricos. Debe contar con al menos un dígito y una letra mayúscula y una minúscula.';
    valid = false;
  } else {
    validarExito(formPassword, formPasswordError);
    formPasswordError.textContent = "";
  }

  if (formTown.value === "") {
    validarError(formTown, formTownError);
    formTownError.textContent = 'Debe seleccionar un municipio de la lista.';
    valid = false;
  }

  // Enviamos el formulario si la variable booleana "valid" sigue siendo true.

  if (valid) {
    console.log('Formulario enviado.');
    form.submit();
  }

  // Como cabría esperar, al no existir la página "grabar.php" el navegador nos dará un error 405 al enviar el formulario.
});