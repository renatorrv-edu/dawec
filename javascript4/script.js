// Ejercicio 1 y Ejercicio 2

let frases_informatica = ['No hay bugs, solo características no documentadas.', 
  'El mejor lugar para esconder un cadáver es la segunda página de google.', 
  'La primera regla de la programación: si funciona, no lo toques.',
  '- "¿Sabes cuánto es 101 en binario?"\n- "5."\n- "Por el culo te la hinco."',
  'La inteligencia artificial no es rival para la estupidez natural.',
  'En caso de duda, utiliza "Brute Force".'];

colores = [
  "#ff0000", // Rojo
  "#00ff00", // Verde
  "#0000ff", // Azul
  "#ff00ff", // Magenta
  "#00ffff", // Cyan
  "#ff8000", // Naranja
  "#8000ff", // Morado
  "#00ff80", // Verde claro
  "#ff0080", // Rosa
  "#80ff00", // Verde lima
  "#0080ff", // Azul claro
  "#ffbf00", // Amarillo oscuro
  "#bf00ff", // Violeta oscuro
  "#00ffbf", // Turquesa
  "#bf00ff", // Púrpura
  "#00bfff", // Azul claro
  "#ff00bf", // Magenta oscuro
  "#80ff80", // Verde claro pastel
  "#ff80ff", // Rosa pastel
  "#80ffff" // Cian claro
];

let ej1Boton = document.getElementById('ver-mas-boton');

ej1Boton.addEventListener('click', function() {
  texto = document.getElementById('texto-informatica');
  texto.innerHTML = frases_informatica[Math.floor(Math.random() * frases_informatica.length)];
  texto.style.color = colores[Math.floor(Math.random() * colores.length)];
  ej1Boton.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
});

// Ejercicio 3

let ej3Input = document.getElementById('newItemInput');
let ej3Boton = document.getElementById('addItemBtn');
let ej3Lista = document.getElementById('itemsList');

ej3Boton.addEventListener('click', function() {
  if (ej3Input.value.trim() !== "") { //value.trim() comprobará que el input no consista únicamente de espacios en blanco. De esta forma nos aseguramos de que haya texto.
    let li = document.createElement('li');
    li.textContent = ej3Input.value;

    let btnContainer = document.createElement('div');
    btnContainer.className = "btnContainer"

    let completeBtn = document.createElement('button');
    completeBtn.className = 'completeBtn';
    completeBtn.innerHTML = '<img src="img/check.png" alt="Completar tarea" title="Completar tarea">';

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = '<img src="img/delete.png" alt="Borrar tarea" title="Borrar tarea">';

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);

    ej3Lista.appendChild(li);

    ej3Input.value = "";

    completeBtn.addEventListener('click', function() {
      li.classList.toggle('completed');
    })

    deleteBtn.addEventListener('click', function() {
      ej3Lista.removeChild(li);
    })
  } else {
    alert("El campo de 'nuevo ítem' se encuentra vacío. Por favor, añade algo.")
  }
})