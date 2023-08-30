function numerosSiguientes(numero1){
    let siguienteNumero = numero1 + 1;
    for (let i = 0; i < 10; i++) {
        console.log(siguienteNumero);
        siguienteNumero++;
    }
}
console.log("----10 numeros siguientes----");
numerosSiguientes(5);

function numeros5a20(){
    let incremento = 3;
    for (let i = 5; i <= 20; i += incremento) {
        console.log(i);
    }
}
console.log("----numeros de 5 a 20----");
numeros5a20();

function sumatoria(){
    let sumatoria = 0;
    for (let i = 0; i <= 100; i++) {
        sumatoria += i;
    }
    return sumatoria;
}
console.log('Sumatoria:', sumatoria(100));

function factorial(numero2){
    let resultado = 1;
    for (let i = 1; i <= numero2; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log('Factorial:', factorial(5));

function fibonacci(numero3){
    let a = 0, b = 1, temp;
    while (a + b <= numero3) {
        temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
}
console.log("----Secuencia Fibonacci----");
fibonacci(100);