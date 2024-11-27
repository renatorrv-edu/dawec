// Ejercicio 1

let form = document.getElementById('form');
let formName = document.getElementById('name');
let formEMail = document.getElementById('email');
let formPassword = document.getElementById('password')
let formRepeatedPassword = document.getElementById('repeated_password')
let formCaptcha = document.getElementById('captcha')
let captchaOperacion = document.getElementById('captchaOperacion');
let resultadoCaptcha = generarCaptcha();

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
  let formEMailError = document.getElementById('emailError');
  let formPasswordError = document.getElementById('passwordError')
  let formRepeatedPasswordError = document.getElementById('repeated_passwordError')
  let formCaptchaError = document.getElementById('captchaError')
  let captchaOperacionError = document.getElementById('captchaOperacionError');
  
  if (!formName) {

  } else {

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