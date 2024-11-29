// Ejercicio 1

let form = document.getElementById('form');
let formName = document.getElementById('name');
let formEmail = document.getElementById('email');
let formPassword = document.getElementById('password')
let formRepeatedPassword = document.getElementById('repeated_password')
let formCaptcha = document.getElementById('captcha')
let captchaOperacion = document.getElementById('captchaOperacion');
let resultadoCaptcha = generarCaptcha();

// Expresiones regulares a usar
let emailRegEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
let passwordRegEx = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);


form.addEventListener('submit', function(e) {
  e.preventDefault();

  validarInputs();
});

// Con estas dos funciones cambiaremos el estilo del formulario dependiendo de si los campos han sido rellenados correctamente o no.
function validarError(mensaje, input) {
  mensaje.classList.remove('text-success')
  mensaje.classList.add('text-danger');

  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
}

function validarExito(mensaje, input) {
  mensaje.classList.remove('text-danger')
  mensaje.classList.add('text-success');

  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}

function validarInputs() {
  let formNameError = document.getElementById('nameError');
  let formEmailError = document.getElementById('emailError');
  let formPasswordError = document.getElementById('passwordError')
  let formRepeatedPasswordError = document.getElementById('repeated_passwordError')
  let formCaptchaError = document.getElementById('captchaError')
  let captchaOperacionError = document.getElementById('captchaOperacionError');
  
  if (!formName.value) {
    validarError(formNameError, formName);
    formNameError.textContent = 'El campo "Nombre" no puede estar vacío.';
    formName.focus({ focusVisible: true });
    return;
  } else {
    validarExito(formNameError, formName);
    formNameError.textContent = '';
  }

  if (!formEmail.value) {
    validarError(formEmailError, formEmail);
    formEmailError.textContent = 'El campo "Email" no puede estar vacío.';
    formEmail.focus({ focusVisible: true });
    return;
  } else if (!emailRegEx.test(formEmail.value)) {
    validarError(formEmailError, formEmail);
    formEmailError.textContent = 'El campo "Email" debe contener un email válido.';
    formEmail.focus({ focusVisible: true });
    return;
  } else if (emailRegEx.test(formEmail.value)) {
    validarExito(formEmailError, formEmail);
    formEmailError.textContent = '';
  }

  if (!formPassword.value) {
    validarError(formPasswordError, formPassword);
    formPasswordError.textContent = 'El campo "Contraseña" no puede estar vacío.';
    formPassword.focus({ focusVisible: true });
    return;
  } else if (!passwordRegEx.test(formPassword.value)) {
    validarError(formPasswordError, formPassword);
    formPasswordError.textContent = 'El "Email" debe ser un email válido.';
    formEmail.focus({ focusVisible: true });
    return;
  } else if (passwordRegEx.test(formPassword.value)) {

  }

  if (captchaOperacion != resultadoCaptcha) {

  }
  
}

function generarCaptcha() {
  let formCaptchaOperacion = document.getElementById('captchaOperacion');
  let operadores = ['+', '-', 'x'];

  let mensaje = "";

  let primerNumero = Math.floor(Math.random() * 20) + 1;
  let segundoNumero = Math.floor(Math.random() * 20) + 1;

  // Hacemos esto para asegurarnos de que el primer número siempre es mayor, para que no haya restas con números negativos como resultado.
  if (segundoNumero > primerNumero) {
    numeroAux = segundoNumero;
    segundoNumero = primerNumero;
    primerNumero = numeroAux;
  }

  let operacion = operadores[Math.floor(Math.random() * operadores.length)];
  let resultado = primerNumero 

  mensaje += primerNumero + " " + operacion + " " + segundoNumero;

  captchaOperacion.textContent = mensaje;

  switch(operacion) {
    case "+":
      resultado = primerNumero + segundoNumero;
      break;
    case "-":
      resultado = primerNumero - segundoNumero;
      break;
    case "x":
      resultado = primerNumero * segundoNumero;
  }

  return resultado;
}