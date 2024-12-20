// Recogemos los distintos elementos del formulario.
const provincia = document.getElementById('provincia');
const municipio = document.getElementById('municipio');
const campoMunicipio = document.getElementById('campo-municipio');
const btnControl = document.getElementById('btn-control');

// Creamos un objeto de JavaScript que almacenará los distintos municipios de cada provincia.
const municipios = {
  almeria : ["Almería", "Roquetas de Mar", "El Ejido", "Níjar", "Vícar", "Adra"],
  cadiz: ["Jerez de la Frontera", "Algeciras", "Cádiz", "San Fernando", "Sanlúcar de Barrameda", "Chipiona"],
  cordoba: ["Córdoba", "Lucena", "Puente Genil", "Montilla", "Cabra", "Baena"],
  granada: ["Granada", "Motril", "Almuñécar", "Armilla", "Las Gabias", "Maracena"],
  huelva: ["Huelva", "Lepe", "Almonte", "Aljaraque", "Ayamonte", "Moguer"],
  jaen: ["Jaén", "Linares", "Andújar", "Úbeda", "Martos", "Alcalá la Real"],
  malaga: ["Málaga", "Marbella", "Mijas", "Vélez-Málaga", "Fuengirola", "Marbella"],
  sevilla: ["Sevilla", "Dos Hermanas", "Alcalá de Guadaíra", "Utrera", "Mairena del Aljarafe", "Écija"],
}

provincia.addEventListener('change', function() {
  let provinciaSeleccionada = provincia.value;

  /*let provinciaDefault = document.getElementById('provincia-default');

  // Deshabilitar la opción por defecto del select provincia.
  provinciaDefault.disabled = true; */

  // Vaciamos las opciones del campo select antes de introducir los nuevos municipios. Dejamos el campo por defecto.
  municipio.innerHTML = '<option value="" selected class="text-muted" id="municipio-default">Selecciona tu municipio</option>';

  // Creamos el elemento de la lista (option) y lo introducimos en la lista de municipios. Hacemos esto con todos los elementos del array con un For Each.
  municipios[provinciaSeleccionada].forEach(function(nombreMunicipio) {
    let option = document.createElement('option');
    option.value = nombreMunicipio.toLowerCase().trim();
    option.textContent = nombreMunicipio;
    municipio.appendChild(option);
  });

  // Hacemos visible el campo del formulario y el botón de comprobar.
  campoMunicipio.classList.remove('d-none');
  btnControl.classList.remove('d-none');
});

/*municipio.addEventListener('change', function() {
  // Deshabilitamos la opción por defecto una vez hayamos seleccionado una opción.
  let municipioDefault = document.getElementById('municipio-default');
  municipioDefault.disabled = true;
});*/

btnControl.addEventListener('click', function() {
  // Usaremos esta variable para detectar cuál es el primer campo con un error y lo almacenaremos en una variable que estará vacía por defecto.
  let primerError = false;
  let campoPrimerError = null;

  // En esta variable tipo string iremos añadiendo los errores encontrados.
  let mensaje = 'Se han encontrado los siguientes errores: \n\n';
  
  // Usaremos estas dos variables para marcar si el formulario está completado correctamente.
  let esValido = true;

  // Comprobamos ambos campos.
  if (!provincia.value) {
    if (!primerError) {
      primerError = true;
      campoPrimerError = provincia;
    }
    esValido = false;
    mensaje += '- Elige una provincia.\n';
  }

  if (!municipio.value) {
    if(!primerError) {
      primerError = true;
      campoPrimerError = municipio;
    }
    esValido = false;
    mensaje += '- Elige un municipio.\n'
  }

  if (esValido) {
    // Si el formulario está completado correctamente, se reescribirá el mensaje de error por uno exitoso, se enseñará en pantalla y se recargará la página.
    mensaje = 'Se han registrado los datos introducidos.';
    alert(mensaje);
    location.reload();
  } else {
    // En caso contrario, mostraremos los errores por pantalla y marcaremos el primer campo erróneo.
    mensaje += '\nPor favor, solucione los errores y pruebe de nuevo.'
    alert(mensaje);
    campoPrimerError.focus();
  }
});

// Con este addEventListener activaremos el botón de comprobación si pulsamos la combinación Ctrl + Enter en el teclado.
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && (event.ctrlKey)) {
      btnControl.click();
    }
})