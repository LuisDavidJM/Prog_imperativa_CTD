//Ejercicio 1
const edades = [33, 27, 34, 30, 34, 25];

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
console.log("-----Ejercicio 1--------");
console.log(ordenarAsc(edades));
console.log(ordenarDes(edades));

//Ejercicio 2
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"];

function ordenarAlfabeticamente(array) {
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

console.log("-----Ejercicio 2--------");
console.log(ordenarAlfabeticamente(letras));

//Ejercicio 3
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

function ordenarAscSaldo(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].saldo > array[j + 1].saldo) {
                let num = array[j];
                array[j] = array[j + 1];
                array[j + 1] = num;
            }
        }
    }
    return array
}

function ordenarAscEdad(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].edadTitular > array[j + 1].edadTitular) {
                let num = array[j];
                array[j] = array[j + 1];
                array[j + 1] = num;
            }
        }
    }
    return array
}

console.log("-----Ejercicio 3--------");
console.log("Por Saldo de la cuenta");
console.log(ordenarAscSaldo(arrayCuentas));
console.log("Por edad del titular");
console.log(ordenarAscEdad(arrayCuentas));