// Ejercicio 1

let boton1 = document.getElementById('ejercicio1');

boton1.addEventListener('click', function() {
  let user = {};
  console.log(user);

  user.name = "John";
  console.log(user);

  user.surname = "Smith";
  console.log(user);

  user.name = "Pete"
  console.log(user);

  delete user.name;
  console.log(user);

  alert("Resultados de la comprobación mostrados en la consola.")

});

// Ejercicio 2

let boton2 = document.getElementById('ejercicio2');

boton2.addEventListener('click', function() {
  function isEmpty(obj) {
    //Si la función entra en este bucle y comienza a ejecutarse, significará que no está vacío. Devuelve false.
    for (let key in obj) {
      return false;
    }
    // En caso contrario, devolverá true.
    return true;
  }
  
  function buildMessage() {
    let mensaje = "";
    let booleano;

    booleano = isEmpty(schedule);

    if (booleano) {
      mensaje += booleano + "\nEl objeto está vacío.";
    } else {
      mensaje += booleano + "\nEl objeto no está vacío.";
    }

    return mensaje;
  }

  let schedule = {};

  mensajeConsola = buildMessage();

  alert(mensajeConsola);
  console.log(mensajeConsola);

  schedule["8:30"] = "Hora de levantarse";

  mensajeConsola = buildMessage();

  alert(mensajeConsola);
  console.log(mensajeConsola);
});

// Ejercicio 3

let boton3 = document.getElementById('ejercicio3');

boton3.addEventListener('click', function() {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;

  for (let key in salaries) {
    sum += salaries[key];
  }

  mensaje = "";

  for (let key in salaries) {
    mensaje += "Nombre: " + key + ", Salario: " + salaries[key] + "\n";
  }

  alert(mensaje + "\nSuma total de todos los salarios: " + sum);
  console.log(mensaje + "\nSuma total de todos los salarios: " + sum);
});

// Ejercicio 4

let boton4 = document.getElementById('ejercicio4');

boton4.addEventListener('click', function() {
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
  }

  let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };

  let mensaje = "";

  for (let key in menu) {
    mensaje += key + ": " + menu[key] + "\n";
  }

  alert("Objeto antes de pasarlo por la función: \n\n" + mensaje);
  console.log("Objeto antes de pasarlo por la función: \n\n" + mensaje);

  multiplyNumeric(menu);
  mensaje = "";

  for (let key in menu) {
    mensaje += key + ": " + menu[key] + "\n";
  }

  alert("Objeto después de pasarlo por la función: \n\n" + mensaje);
  console.log("Objeto después de pasarlo por la función: \n\n" + mensaje);

});