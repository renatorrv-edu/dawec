function enviarSaludo() {
  let parrafo = document.getElementById('saludo');
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;

  mensaje = "Hola, " + nombre + " " + apellido + ". Gracias por rellenar el formulario.";

  parrafo.innerHTML =  mensaje;
}