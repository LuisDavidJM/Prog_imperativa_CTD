/*
Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.
*/
function encontrarMultiplos(numero, limite) {
    const multiplos = [];

    for (let i = numero; i < limite; i += numero) {
        multiplos.push(i);
    }

    return multiplos;
}
console.log(encontrarMultiplos(5, 50));

/*
Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).
Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

 */

// Crear arreglo de objetos estudiantes
const estudiantes = [
    {
        nombre: "Juan",
        notas: [85, 70, 92, 60],
        aprobado: false,
        calcularPromedio: function () {
            let sumaNotas = 0;
            for (const nota of this.notas) {
                sumaNotas += nota;
            }
            return sumaNotas / this.notas.length;
        }
    },
    {
        nombre: "María",
        notas: [75, 80, 68, 95],
        aprobado: false,
        calcularPromedio: function () {
            let sumaNotas = 0;
            for (const nota of this.notas) {
                sumaNotas += nota;
            }
            return sumaNotas / this.notas.length;
        }
    },
    {
        nombre: "Carlos",
        notas: [90, 88, 75, 82],
        aprobado: false,
        calcularPromedio: function () {
            let sumaNotas = 0;
            for (const nota of this.notas) {
                sumaNotas += nota;
            }
            return sumaNotas / this.notas.length;
        }
    },
    {
        nombre: "Ana",
        notas: [62, 58, 70, 80],
        aprobado: false,
        calcularPromedio: function () {
            let sumaNotas = 0;
            for (const nota of this.notas) {
                sumaNotas += nota;
            }
            return sumaNotas / this.notas.length;
        }
    }
];

// Función para determinar si el estudiante aprobó
function determinarAprobacion(estudiante) {
    const promedio = estudiante.calcularPromedio();
    estudiante.aprobado = promedio >= 70;
}

// Calcular si los estudiantes aprobaron o no
estudiantes.forEach(estudiante => {
    determinarAprobacion(estudiante);
});

// Imprimir estado de aprobación de los estudiantes
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre} ${estudiante.aprobado ? "aprobó" : "no aprobó"}`);
});
  
/*
Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.
*/
let numeros = [2, 7, 10, 15, 20, 25, 30];
let i = 0;
let sumaPares = 0;

while (i < numeros.length) {
  if (numeros[i] % 2 === 0) {
    sumaPares += numeros[i];
  }
  i++;
}

console.log("La suma de los números pares es:", sumaPares);

/*
Crea una función que tome un arreglo de números y devuelva el producto de los números impares.
Respuesta y Explicación:
Para cada número en el arreglo, verifica si es impar (su residuo de la división por 2 no es 0). 
Si es impar, multiplica ese número al producto acumulado. Al final, la función devuelve el producto total de los números impares en el arreglo.
*/

function productoNumerosImpares(arreglo) {
    let producto = 1;
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 !== 0) {
        producto *= arreglo[i];
      }
    }
  
    return producto;
}
  
const numerosArray = [3, 5, 2, 7, 4, 6, 9];
console.log("El producto de los números impares es:", productoNumerosImpares(numerosArray));

/*
Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.
*/
const vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2012,
    precio: 15000,
    calcularImpuesto: function() {
      if (this.anio < 2010) {
        return this.precio * 0.1;
      } else {
        return this.precio * 0.05;
      }
    }
  };
  
  console.log("Marca:", vehiculo.marca);
  console.log("Modelo:", vehiculo.modelo);
  console.log("Año:", vehiculo.anio);
  console.log("Precio:", vehiculo.precio);
  console.log("Impuesto a pagar:", vehiculo.calcularImpuesto());
  
  