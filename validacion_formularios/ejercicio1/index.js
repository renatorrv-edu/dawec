// Variables creadas desde los elementos del formulario.
let form = document.getElementById('form');
let formName = document.getElementById('name');
let formEmail = document.getElementById('email');
let formPassword = document.getElementById('password');
let formRepeatedPassword = document.getElementById('repeated_password');
let formCaptcha = document.getElementById('captcha');
let formCaptchaOperacion = document.getElementById('captchaOperacion');
let formResultadoCaptcha = generarCaptcha();
let formAceptarTerminos = document.getElementById('aceptarTerminos');
let enviarBtn = document.getElementById('enviarBtn');

enviarBtn.disabled = true; // Marcamos como disabled este botón desde el comienzo.

// Variables creadas con los mensajes de error de cada campo.
let formNameError = document.getElementById('nameError');
let formEmailError = document.getElementById('emailError');
let formPasswordError = document.getElementById('passwordError');
let formRepeatedPasswordError = document.getElementById('repeated_passwordError');
let formCaptchaError = document.getElementById('captchaError');

// Expresiones regulares a usar
let emailRegEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
let passwordRegEx = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

// Esta función se encargará de generar el captcha y almacenar el resultado cada vez que accedamos al formulario.
function generarCaptcha() {
  let operadores = ['+', '-', 'x'];
  let mensaje = "";

  let primerNumero = Math.floor(Math.random() * 20) + 1;
  let segundoNumero = Math.floor(Math.random() * 20) + 1;

  // Hacemos esto para asegurarnos de que el primer número siempre es mayor, para que no haya restas con números negativos como resultado.
  if (segundoNumero > primerNumero) {
    let numeroAux = segundoNumero;
    segundoNumero = primerNumero;
    primerNumero = numeroAux;
  }

  let operacion = operadores[Math.floor(Math.random() * operadores.length)];
  let resultado = primerNumero;

  mensaje += primerNumero + " " + operacion + " " + segundoNumero;

  formCaptchaOperacion.textContent = mensaje;

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

// Esta función se encargará de verificar que todos los campos están completos antes de permitir enviar el formulario.
function verificarCampos() {
  if (
    formName.value &&
    emailRegEx.test(formEmail.value) &&
    passwordRegEx.test(formPassword.value) &&
    formPassword.value === formRepeatedPassword.value &&
    parseInt(formCaptcha.value) === formResultadoCaptcha &&
    formAceptarTerminos.checked
  ) {
    enviarBtn.disabled = false;
  } else {
    enviarBtn.disabled = true;
  }
}

// Con estas dos funciones cambiaremos el estilo del formulario dependiendo de si los campos han sido rellenados correctamente o no. Usamos clases personalizadas de bootstrap.
function validarError(mensaje, input) {
  mensaje.classList.remove('text-success');
  mensaje.classList.add('text-danger');

  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
}

function validarExito(mensaje, input) {
  mensaje.classList.remove('text-danger');
  mensaje.classList.add('text-success');

  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}

// A partir de aquí tenemos todos los Even Listeners de cada campo. Se activarán en cuanto se salga de ellos.
formName.addEventListener('blur', function() {
  if (!formName.value) {
    validarError(formNameError, formName);
    formNameError.textContent = 'El campo "Nombre" no puede estar vacío.';
    formName.focus({ focusVisible: true });
  } else {
    validarExito(formNameError, formName);
    formNameError.textContent = '';
  }
  verificarCampos(); // Verificamos los campos después de rellenar cada campo exitosamente.
});

formEmail.addEventListener('blur', function() {
  if (!formEmail.value) {
    validarError(formEmailError, formEmail);
    formEmailError.textContent = 'El campo "Email" no puede estar vacío.';
    formEmail.focus({ focusVisible: true });
  } else if (!emailRegEx.test(formEmail.value)) {
    validarError(formEmailError, formEmail);
    formEmailError.textContent = 'El campo "Email" debe contener un email válido.';
    formEmail.focus({ focusVisible: true });
  } else {
    validarExito(formEmailError, formEmail);
    formEmailError.textContent = '';
  }
  verificarCampos();
});

formPassword.addEventListener('blur', function() {
  if (!formPassword.value) {
    validarError(formPasswordError, formPassword);
    formPasswordError.textContent = 'El campo "Contraseña" no puede estar vacío.';
    formPassword.focus({ focusVisible: true });
  } else if (!passwordRegEx.test(formPassword.value)) {
    validarError(formPasswordError, formPassword);
    formPasswordError.textContent = 'Asegúrate de introducir una contraseña válida.';
    formPassword.focus({ focusVisible: true });
  } else {
    validarExito(formPasswordError, formPassword);
    formPasswordError.textContent = '';
  }
  verificarCampos();
});

formRepeatedPassword.addEventListener('blur', function() {
  if (formPassword.value !== formRepeatedPassword.value) {
    validarError(formRepeatedPasswordError, formRepeatedPassword);
    formRepeatedPasswordError.textContent = 'Las contraseñas deben coincidir.';
    formRepeatedPassword.focus({ focusVisible: true });
  } else {
    validarExito(formRepeatedPasswordError, formRepeatedPassword);
    formRepeatedPasswordError.textContent = '';
  }
  verificarCampos();
});

formCaptcha.addEventListener('blur', function() {
  // Convertimos el valor del campo de Captcha a entero para poder compararlo.
  if (parseInt(formCaptcha.value) !== formResultadoCaptcha) {
    validarError(formCaptchaError, formCaptcha);
    formCaptchaError.textContent = 'Error. Pruebe de nuevo a resolver el Captcha.';
    formCaptcha.focus({ focusVisible: true });
  } else {
    validarExito(formCaptchaError, formCaptcha);
    formCaptchaError.textContent = '';
  }
  verificarCampos(); // Verifica los campos después de cada validación
});

formAceptarTerminos.addEventListener('change', function() {
  verificarCampos();
});
