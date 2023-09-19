//Ejercicios 1
let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamérica",
        poblacion: 40000000
    },
    {
        nombre: "Colombia",
        continente: "Sudamérica",
        poblacion: 50372000
    },

    {
        nombre: "Brasil",
        continente: "Sudamérica",
        poblacion: 300000000
    },
    {
        nombre: "Etiopía",
        continente: "África",
        poblacion: 15000000
    },
    {
        nombre: "Chile",
        continente: "Sudamérica",
        poblacion: 10000000
    }
];

function filtrarPorContinente(array, continente, poblacion) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i].continente === continente) && (array[i].poblacion >= poblacion)) {
            newArray.push(array[i].nombre)
        }
    }
    return newArray
}
console.log("-----------Ejercicio 1------------")
console.log(filtrarPorContinente(paises, "Sudamérica", 40000000))

//Ejercicio 2
let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

function ordenarAsc(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let num = array[j];
                array[j] = array[j + 1];
                array[j + 1] = num;
            }
        }
    }
    return array
}

function ordenarDes(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                let num = array[j];
                array[j] = array[j + 1];
                array[j + 1] = num;
            }
        }
    }
    return array
}

function bubbleSort(array, orden) {
    orden = orden.toUpperCase()
    if (orden === "ASC") {
        return ordenarAsc(array)
    } else if (orden === "DESC") {
        return ordenarDes(array)
    } else {
        return "El sentido es incorrecto"
    }
}

console.log("-----------Ejercicio 2------------")
console.log("Original: ", arrayDeNumeros)
console.log("Ordenado: ", bubbleSort(arrayDeNumeros, "ASC"))

//Ejercicio 3
let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

function sumaFilaUno(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz[0].length; i++) {

        suma += matriz[0][i];
    }
    return suma
}

function retornarPares(matriz) {
    array = []
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 == 0) {
                array.push(matriz[i][j])
            }
        }
    }
    return array
}

console.log("-----------Ejercicio 3------------")
console.table(matriz)
console.log(sumaFilaUno(matriz))
console.log(retornarPares(matriz))
