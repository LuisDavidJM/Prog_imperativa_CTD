//Ejercicio 1
const edades = [33, 27, 34, 30, 34, 25];

function ordenarAsc(array){
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++){
            if (array[j] > array[j+1]){
                let num = array[j];
                array[j] = array[j+1];
                array[j+1] = num;
            } 
        }
    }
    return array
}

function ordenarDes(array){
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++){
            if (array[j] < array[j+1]){
                let num = array[j];
                array[j] = array[j+1];
                array[j+1] = num;
            } 
        }
    }
    return array
}

console.log(ordenarAsc(edades));
console.log(ordenarDes(edades));