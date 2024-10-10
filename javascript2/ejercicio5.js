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

let comienzo = 5, final = 47;

let numerosPrimos = [];

for (let i = comienzo; i <= final; i++) {
    if(esPrimo(i)) {
        numerosPrimos.push(i);
    }
}

console.log(numerosPrimos);

//Revisar y rehacer.