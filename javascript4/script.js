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
    alert("El campo de 'nuevo ítem' se encuentra vacío. Por favor, añade algo.");
  }
})

// Ejercicio 4

function toggleBox() {
  let toggleBtn = document.getElementById('toggleBtn');
  let box = document.getElementById('box');

  if (box.style.display === "none") {
    box.style.display = "block";
    toggleBtn.innerHTML = "Ocultar Caja";
  } else {
    box.style.display = "none";
    toggleBtn.innerHTML = "Mostrar Caja";
  }
}

let toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', toggleBox);

// Ejercicio 5

let ej5Input = document.getElementById('newTaskInput');
let ej5Btn = document.getElementById('addTaskBtn');
let ej5Lista = document.getElementById('taskList');

function addTask() {
  if (ej5Input.value.trim() !== "") { //Verificamos que el campo de texto no esté vacío y no tenemos en cuenta los espacios en blanco de más.
    let li = document.createElement('li');
    li.textContent = ej5Input.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'X';

    li.appendChild(deleteBtn);
    ej5Lista.appendChild(li);

    deleteBtn.addEventListener('click', function() {
      ej5Lista.removeChild(li);
    })

    ej5Input.value = "";
  } else {
    alert("El campo de 'Insertar una nueva tarea' se encuentra vacío. Por favor, añade algo.");
  }
}

ej5Btn.addEventListener('click', addTask);

// Ejercicio 6

let ej6Input = document.getElementById('inputName');
let ej6Btn = document.getElementById('addBtn');
let ej6Lista = document.getElementById('nameList');
let ej6Random = document.getElementById('randomBtn');
let ej6Name = document.getElementById('selectedName')
let listaNombres = [];

function addName() {
  if (ej6Input.value.trim() !== "") {
    listaNombres.push(ej6Input.value);

    let li = document.createElement('li');
    li.textContent = ej6Input.value;

    ej6Lista.appendChild(li)

    ej6Input.value = "";
  } else {
    alert("El campo de 'Insertar un nombre' se encuentra vacío. Por favor, añade algo.");
  }
}

ej6Btn.addEventListener('click', addName);

ej6Random.addEventListener('click', function() {
  if (listaNombres.length === 0) {
    alert("Aún no has introducido nombres en la lista.");
    return;
  }

  let indAleatorio = Math.floor(Math.random() * listaNombres.length);
  let nombreAleatorio = listaNombres[indAleatorio];

  let nombres = ej6Lista.getElementsByTagName('li');
  
  // Creamos un Array con los items 'li' de la lista y la recorremos con un for each para quitar la clase selected de una posible selección aleatoria anterior.
  // Usamos una función en flecha buscando que el código sea más compacto y ligero.
  Array.from(nombres).forEach(nombre => {
    nombre.classList.remove('selected');
  })

  //Vaciamos también el mensaje antes de marcar el siguiente.
  ej6Name.innerHTML = "";

  // Cambiamos la clase del elemento seleccionado a "selected".
  nombres[indAleatorio].classList.add('selected');

  //Introducimos el mensaje debajo del botón.
  ej6Name.innerHTML = `El nombre seleccionado es: <b>${nombreAleatorio}</b>.`;
})