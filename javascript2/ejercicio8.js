//Ejercicio 8

function calculateFactorial (n) {

  let result = 1;

  if (n == 1) {
    return result;
  }

  for (let i = 1; i >= n; i++) {
    result *= i;
  }
}

alert("");