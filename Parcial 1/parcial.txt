//Ejercicio 1
function tipoDeDato(valor1, valor2) {
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {
        return valor1 * valor2;
    } else if (typeof valor1 === 'string' && typeof valor2 === 'string') {
        return valor1 + valor2;
    } else if (typeof valor1 === 'boolean' && typeof valor2 === 'boolean') {
        return false;
    } else {
        return "Los tipos de datos no coinciden con ninguna opcion";
    }
}
console.log(tipoDeDato(3, 5));
console.log(tipoDeDato("Hola", "Adios"));
console.log(tipoDeDato(true, false));

//Ejercicio 2
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 22,
    esArgentino: true
};
function edadOrigen(objeto) {
    if (objeto.edad >= 18 && objeto.esArgentino) {
        return `${objeto.nombre} ${objeto.apellido} vive en Argentina y es mayor de edad.`;
    } else if (objeto.edad >= 18 && !objeto.esArgentino) {
        return `${objeto.nombre} ${objeto.apellido} NO vive en Argentina y es mayor de edad.`;
    } else if (objeto.edad < 18 && objeto.esArgentino) {
        return `${objeto.nombre} ${objeto.apellido} vive en Argentina y NO es mayor de edad.`;
    } else {
        return `${objeto.nombre} ${objeto.apellido} NO vive en Argentina y NO es mayor de edad.`;
    }
}
console.log(edadOrigen(persona));

function verificacionDeTiposDeDatos(parametro1, parametro2) {
    if ((parametro1.constructor === String && parametro2.constructor === String) || (parametro1.constructor === Boolean && parametro2.constructor === Boolean)) {
        return "Son del mismo tipo";
    } else {
        return "No son del mismo tipo";
    }
}
console.log(verificacionDeTiposDeDatos(true, "true"));
console.log(verificacionDeTiposDeDatos(false, true));
console.log(verificacionDeTiposDeDatos("true", "false"));
console.log(verificacionDeTiposDeDatos("false", false));

//Ejercicio 3
let destinos = [];
let brasil = {
    cantidadDeVisitas: 3,
    clima: "soleado",
    habitantes: "212 millones"
}
let rusia = {
    cantidadDeVisitas: 4,
    clima: "frío",
    habitantes: "144 millones"
}
let estadosUnidos = {
    cantidadDeVisitas: 1,
    clima: "nublado",
    habitantes: "329 millones"
}
destinos.push(brasil);
destinos.push(rusia);
destinos.push(estadosUnidos);
console.log(destinos);

function siguienteViaje(array) {
    for (const i of array) {
        i.cantidadDeVisitas += 1;
    }
}
siguienteViaje(destinos)
console.log(destinos);