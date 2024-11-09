// Ejercicio 1
let boton1 = document.getElementById("ejercicio1");

boton1.addEventListener('click', function(){
  let diasSemana  = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  alert("Por favor, introduce un número del 0 al 6 para mostrarte el día de la semana correspondiente.");
  let opcion = Number(prompt("Introduce un número"));

  while (opcion < 0 || opcion > 6) {
    alert("Por favor, introduce un número entre el 0 y el 6.");
    opcion = Number(prompt("Introduce un número"));
  }

  alert("El número del día seleccionado es " + diasSemana[opcion] + ".");
  console.log("El número del día seleccionado es " + diasSemana[opcion] + ".");

})

//Ejercicio 2

let boton2 = document.getElementById("ejercicio2");

boton2.addEventListener('click', function() {
  let arrayBooleano = ["Verdadero", "Falso"];

  let numero = Number(prompt("Introduce un número entre 0 y 9:"));

  let mensaje = "Has seguido las instrucciones: \n";

  if (numero >= 0 && numero <= 9) {
    mensaje += arrayBooleano[0] + ".";
  } else {
    mensaje += arrayBooleano[1] + ".";
  }

  alert(mensaje);
  console.log(mensaje);
})

// Ejercicio 3

let boton3 = document.getElementById("ejercicio3")

boton3.addEventListener('click', function() {
  function sumaLista(numeros) {
    let resultado = 0;

    numeros.forEach(function(numero) {
      resultado += numero;
    })

    return resultado;
  }

  let numeros = [1, 2, 3, 4, 5];
  
  let mensajeAMostrar = (sumaLista(numeros));

  alert("La suma de [" + numeros.toString() + "] es : " + mensajeAMostrar);
  console.log("La suma de [" + numeros.toString() + "] es : " + mensajeAMostrar);
})

// Ejercicio 4

let boton4 = document.getElementById("ejercicio4")

boton4.addEventListener('click', function() {
  let numero;
  let numeros = [];
  let posicion = 0;
  let numerosPares = 0;
  let numerosImpares = 0;
  
  while (true) {
    numero = Number(prompt("Por favor, introduce un número. Introduce '0' para terminar de añadir valores: "));

    if (numero == 0) {
      break;
    }

    if (!isNaN(numero)) {
      numeros[posicion] = numero;
      posicion++;
    } else {
      alert("Entrada inválida. Introduce un número.")
    }
  }

  for (let i = 0; i < posicion; i++) {
    if (numeros[i] % 2 == 0) {
      numerosPares++;
    } else {
      numerosImpares++;
    }
  }

  alert("El array introducido es: [" + numeros.toString() + "]. \nNúmeros pares: " + numerosPares + "\nNúmeros impares: " + numerosImpares);
  console.log("El array introducido es: [" + numeros.toString() + "]. \nNúmeros pares: " + numerosPares + "\nNúmeros impares: " + numerosImpares);
})

// Ejercicio 5

let boton5 = document.getElementById("ejercicio5")

boton5.addEventListener('click', function() {
  function minimo(numeros, parametro) {
    let valorMinimo = numeros[0]
    let indiceMinimo = 0;
    let mensaje = "";

    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] < valorMinimo) {
        valorMinimo = numeros[i];
        indiceMinimo = i;
      }
    }

    if (parametro == "v") {
      mensaje += "El valor más bajo del array introducido es: " + valorMinimo + ".";
    } else if (parametro == "i") {
      mensaje += "El valor más bajo del array introducido se encuentra en la posición: " + indiceMinimo + " (empezando desde 0).";
    } else {
      mensaje += "Por favor, introduce un parámetro válido: 'i' o 'v'.";
    }

    return mensaje;

  }
  
  let numeros = [22, 150, 8, 1000, 11];

  mensajeValorMinimo = minimo(numeros, "v");
  mensajeIndiceMinimo =  minimo(numeros, "i");
  //mensajeError = minimo(numeros, "x");
  
  alert(mensajeValorMinimo);
  alert(mensajeIndiceMinimo);
  //alert(mensajeError);

})

// Ejercicio 6

let boton6 = document.getElementById("ejercicio6")

boton6.addEventListener('click', function() {
  function existeEn(caracter, letras) {
    for (let i = 0; i < letras.length; i++) {
      if (letras[i] == caracter) {
        return true;
      }
    }
    
    return false;
  }

  letras = ["r", "e", "n", "a", "t", "o"];
  caracter = "n";
  //caracter = "x";

  valorBooleano = existeEn(caracter, letras)

  if (valorBooleano) {
    alert("Verdadero: \nEl carácter '" + caracter + "' se encuentra en la lista proporcionada.");
  } else {
    alert("Falso: \nEl caracter '" + caracter + "' no se encuentra en la lista proporcionada.");
  }
})

// Ejercicio 7

let boton7 = document.getElementById("ejercicio7")

boton7.addEventListener('click', function() {
  function esVocal(caracter) {
    let vocales = ["a", "e", "i", "o", "u"];
    let caracterMinusculas = caracter.toLowerCase();
    
    /* Aunque podemos hacerlo de esta forma y el resultado sería el mismo, usar el método "includes" de los objetos Array es más eficiente.
    
    for (let i = 0; i < vocales.length; i++) {
      if (vocales[i] == caracterMinusculas) {
        return true;
      }
    }

    return false;*/

    // Esto devolverá un valor booleano.
    return vocales.includes(caracterMinusculas);
  }

  //let caracter = "E";
  let caracter = "y";

  if (esVocal(caracter)) {
    alert("Verdadero: \nEl carácter '" + caracter + "' es una vocal.");
  } else {
    alert("Falso: \nEl carácter '" + caracter + "' no es una vocal.");
  }
})

// Ejercicio 8

let boton8 = document.getElementById("ejercicio8")

boton8.addEventListener('click', function() {
  function listar(array) {
    let mensajePalabras = array.join('-'); //Le pasamos como argumento el caracter con el que queremos separar los elementos del array.

    return mensajePalabras;
  }

  let frutas = ["Guayaba", "Plátano", "Fresa", "Chirimoya", "Mango"];

  cadenaUnida = listar(frutas);

  alert("La cadena [" + frutas.toString() + "] unida es: \n" + cadenaUnida + ".");
})

// Ejercicio 9

let boton9 = document.getElementById("ejercicio9")

boton9.addEventListener('click', function() {
  function servicio(dia) {
    let turnos = [
      ["lunes", "María"],
      ["martes", "Luis"],
      ["miercoles", "Antonia"],
      ["jueves", "Pedro"],
      ["viernes", "Marisa"],
    ];

    let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
    
    let mensaje = "";

    if (!diasSemana.includes(dia.toLowerCase())) {
      mensaje = "Error - Introduzca un día de la semana válido."
      return mensaje;
    }
    
    for (let i = 0; i < turnos.length; i++) {
      if (turnos[i][0] === dia.toLowerCase()) {
        mensaje += "El día " + dia + " se encarga del servicio: " + turnos[i][1] + "."
        return mensaje;
      }
    }

    mensaje += "Error - Ese día de la semana no prestamos servicio.";
    return mensaje;
  }

  let dia = "Miercoles";
  let mensajeTrabajador = servicio(dia);
  
  alert(mensajeTrabajador);
})

// Ejercicio 10

let boton10 = document.getElementById("ejercicio10")

boton10.addEventListener('click', function() {
  function listarPrecio(articulo) {
    let articulos = [
      ["monitor", 200],
      ["teclado", 20],
      ["raton", 10]
    ];

    let mensaje = "";

    for (let i = 0; i < articulos.length; i++) {
      if (articulos[i][0] === articulo.toLowerCase()) { // Nos aseguramos de poner en minúscula la palabra para que no haya problemas a la hora de comparar.
        mensaje += articulos[i][1] + "€."
        return mensaje;
      }
    }

    mensaje += "Error - Artículo no encontrado.";
    return mensaje;
  }

  let articulo = "Teclado";
  let precio = listarPrecio(articulo);

  mensajeAlerta = "El precio del artículo '" + articulo + "' es: " + precio;

  alert(mensajeAlerta);
})