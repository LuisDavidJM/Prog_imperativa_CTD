/* PRE - EXAMEN FINAL */

//EJERCICIO Nº1

//Dada la matriz
//3x3

let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5], // 2
];

/* 
1) Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.

2) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */
console.log("-----------Ejercicio 1------------")
function recibeMatriz(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }
    return suma
}
console.log(recibeMatriz(matriz))

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
console.log(retornarPares(matriz))
/* ---------------------------------------------------------- */

//EJERCICIO Nº2

//Dado el siguiente arreglo de objetos:

let cuadros = [
    {
        nombre: "Mona Lisa",
        creador: "Leonardo Da Vinci",
    },
    {
        nombre: "La ultima cena",
        creador: "Leonardo Da Vinci",
    },
    {
        nombre: "La noche estrellada",
        creador: "Vincent van Gogh",
    },
    {
        nombre: "El grito",
        creador: "Edvard Munch",
    },
    {
        nombre: "Trigal con cuervos",
        creador: "Vincent van Gogh",
    },
    {
        nombre: "Maria Magdalena",
        creador: "Leonardo Da Vinci",
    },
    {
        nombre: "Amor y Dolor",
        creador: "Edvard Munch",
    },
    {
        nombre: "Ansiedad",
        creador: "Edvard Munch",
    },
];
/* 
1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista. Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
 
Nuestra función deberá retornar: 
 
("Mona Lisa", "La ultima cena", "Maria Magdalena")
 
*/
console.log("-----------Ejercicio 2------------")
function filtrarPorCreador(array, creador) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].creador === creador) {
            newArray.push(array[i].nombre)
        }
    }
    return newArray
}
console.log(filtrarPorCreador(cuadros, "Edvard Munch"))
/* ---------------------------------------------------------- */

/* 
//EJERCICIO Nº3
 
Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
 
1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. 
2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
*/
console.log("-----------Ejercicio 3------------")
function bubbleSort(array) {
    let originalArray = [...array]

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].creador > array[j + 1].creador) {
                let num = array[j];
                array[j] = array[j + 1];
                array[j + 1] = num;
            }
        }
    }
    if (originalArray == array) {
        return true
    }
    else {
        return array
    }
}
console.log(bubbleSort(cuadros))
/* ---------------------------------------------------------- */

/* 
//EJERCICIO Nº4
 
Desarrollar una función para cada uno de las siguientes apartados: 
 
1) Que reciba por parámetro un número entero y retorne su triple.
2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 
 
*/
console.log("-----------Ejercicio 4------------")
function triple(numero) {
    if (numero % 1 === 0) {
        return numero * 3
    }
    else {
        return "No es numero entero"
    }
}
function multiplicacion(numero1, numero2) {
    if (numero1 % 1 === 0 && numero2 % 1 === 0) {
        return numero1 * numero2
    }
    return "Uno de los numeros no es entero"
}
function division(numero1, numero2) {
    if (numero1 % 1 === 0 && numero2 % 1 === 0) {
        if (numero1 != 0 || numero2 != 0) {
            return numero1 / numero2
        }
        return "Un numero es cero"
    }
    else {
        return "Uno de los numeros no es entero"
    }
}

console.log(triple(3))
console.log(multiplicacion(2, 5))
console.log(division(14, 4))
/* ---------------------------------------------------------- */


/* 
//EJERCICIO Nº5
 
Crear una matriz de 5 x 7.
Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
 */
console.log("-----------Ejercicio 5------------")
let matrizDos = []
let valor = 1
for (let i = 0; i < 5; i++) {
    let filas = []
    for (let j = 0; j < 7; j++) {
        filas.push(valor)
        valor++
    }
    matrizDos.push(filas)
}
console.table(matrizDos)

function sumaFilaCuatro(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz[3].length; i++) {

        suma += matriz[3][i];
    }
    return suma
}
console.log(sumaFilaCuatro(matrizDos))
/* ---------------------------------------------------------- */



//EJERCICIO Nº6

//Dado el siguiente arreglo de objetos: 

let personas = [
    {
        nombre: "Lucia",
        oficio: "Medica",
        edad: 37
    },
    {
        nombre: "Tiziano",
        oficio: "Programador",
        edad: 9
    },
    {
        nombre: "Julian",
        oficio: "Chofer",
        edad: 45
    },
    {
        nombre: "Adriana",
        oficio: "Chef",
        edad: 24
    },
]

/*
 
1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.
2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. 
 
*/
console.log("-----------Ejercicio 6------------")
function filtrarPorEdad(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edad > 25) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filtrarPorEdad(personas))
