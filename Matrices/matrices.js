//Ejercicio 2
function generarMatriz() {
    const matriz = [];
    let numero = 1;

    for (let i = 0; i < 10; i++) {
        const fila = [];
        for (let j = 0; j < 10; j++) {
            fila.push(numero);
            numero++;
        }
        matriz.push(fila);
    }

    return matriz;
}

console.table(generarMatriz());

//Ejericio 2 a)
function sumaMatriz(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
    }
    return suma;
}

console.log("La suma de todos los elementos de la matriz es:", sumaMatriz(generarMatriz()));


//Ejercicio 3
function sumarPrimerYUltimaColumna(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][0];
        suma += matriz[i][matriz[i].length - 1];
    }
    return suma;
}

function sumarQuintaYSextaFila(matriz) {
    let suma = 0;
    for (let i = 4; i < 6; i++) { 
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
    }
    return suma;
}

function sumarDiagonalPrincipal(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }
    return suma;
}

function marcarDiagonalInversa(matriz) {
    const n = matriz.length;
    for (let i = 0; i < n; i++) {
      matriz[i][n - i - 1] = 'X'; 
    }
    return matriz;
  }

console.log("Suma de la primer y última columna:", sumarPrimerYUltimaColumna(generarMatriz()));
console.log("Suma de la quinta y sexta fila:", sumarQuintaYSextaFila(generarMatriz()));
console.log("Suma de la diagonal principal:", sumarDiagonalPrincipal(generarMatriz()));
console.log("Matriz con la diagonal marcada:");
console.table(marcarDiagonalInversa(generarMatriz()));
