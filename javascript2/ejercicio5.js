function esPrimo(x) {
    if (x < 2) {
        return false;
    }

    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }

    return true;
}

alert("Vamos a calcular los números primos en un intervalo que tú vas a definir.");

let comienzo = parseInt(prompt("Por favor, introduce un número entero desde la que comience la secuencia: "));

while (Number.isNaN(comienzo)) {
    alert("Entrada inválida.");
    comienzo = parseInt(prompt("Por favor, introduce un número entero desde la que comience la secuencia: "));
}

let final = parseInt(prompt("Por favor, introduce un número entero que marque el final de la secuencia: "));

while (Number.isNaN(final)) {
    alert("Entrada inválida.");
    final = parseInt(prompt("Por favor, introduce un número entero que marque el final de la secuencia: "));
}

if (final < comienzo) { //Dejo esta pequeña comprobación en caso de que el usuario haya puesto los números al revés.
    let aux = final;
    comienzo = final;
    final = aux;
}

let numerosPrimos = [];

for (let i = comienzo; i <= final; i++) {
    if(esPrimo(i)) {
        numerosPrimos.push(i);
    }
}

if (numerosPrimos.length === 0) { //Pongo esto en caso de que no se hayan encontrado números primos en la secuencia.
    alert("No se encontraron números primos en la secuencia.");
    console.log("No se encontraron números primos en la secuencia.");
} else {
    alert("Los números primos encontrados en la secuencia son: " + numerosPrimos + ".");
    console.log("Los números primos encontrados en la secuencia son: " + numerosPrimos + ".");
}