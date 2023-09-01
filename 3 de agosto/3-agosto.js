const prompt = require("prompt-sync")({ sigint: true});
//EJEMPLO 1: CALCULAR INDICE DE MASA CORPORAL
//Pedir al usuario que ingrese su peso y estatura
let peso = prompt("Ingresa tu peso en kg: ");
let estatura = prompt("Ingresa tu estatura en mts: ");

//Calcular el IMC
let imc = peso / (estatura * estatura);

//Mostrar los resultados por pantalla
console.log("Peso: " + peso + " kg");
console.log("Estatura: " + estatura + " mts");
console.log("IMC: " + imc);

console.log("--------------------------");

//EJEMPLO 2: CONVERSOR DE TEMPREATURA ºC A ºF
//pedir al usuario los grados celcius
let temperaturaC = prompt("Ingrese la temperatura en ºC: ");

//Calcular a temperatura en Farenheit
let temperaturaF = (temperaturaC * 9/5) + 32;

//Mostrar los resultados en pantalla
console.log("Temperatura en Celcius: " + temperaturaC + "ºC");
console.log("Temperatura en Farenheit: " + temperaturaF + "ºF");

console.log("--------------------------");

//EJEMPLO DE RAMERAS Y PANTALONES
let ramera = "pantalon";
let pantalon = "ramera";

let aux = ramera;
ramera = pantalon;
pantalon = aux;

console.log("Rameras intercambiado: " + ramera);
console.log("Pantaloes intercambiados: " + pantalon);



