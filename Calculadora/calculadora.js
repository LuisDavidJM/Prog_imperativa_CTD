function suma(operando1, operando2) {
    if (typeof operando1 === 'number' && typeof operando2 === 'number') {
        return operando1 + operando2;
    } else {
        return "Error: Ambos operandos deben ser números";
    }
}

function resta(operando1, operando2) {
    if (typeof operando1 === 'number' && typeof operando2 === 'number') {
        return operando1 - operando2;
    } else {
        return "Error: Ambos operandos deben ser números";
    }
}

function multiplicacion(operando1, operando2) {
    if (typeof operando1 === 'number' && typeof operando2 === 'number') {
        return operando1 * operando2;
    } else {
        return "Error: Ambos operandos deben ser números";
    }
}

function division(operando1, dividendo) {
    if (typeof operando1 === 'number' && typeof dividendo === 'number') {
        if (dividendo !== 0) {
            return operando1 / dividendo;
        } else {
            return "Error: No se puede dividir por cero";
        }
    } else {
        return "Error: Ambos operandos deben ser números";
    }
}

function main(operando1, operando2, operacion) {
    if (operacion) {
        switch (operacion.toLowerCase()) {
            case 'suma':
                return suma(operando1, operando2);
            case 'resta':
                return resta(operando1, operando2);
            case 'multiplicacion':
                return multiplicacion(operando1, operando2);
            case 'division':
                return division(operando1, operando2);
            default:
                return "Error: Operación no válida";
        }
    }
}

let operacionSuma = main(2, 3, "suma");
console.log("Suma:", operacionSuma);

let operacionResta = main("a", 3, "resta");
console.log("Resta:", operacionResta);

let operacionMultiplicacion = main(5, 2.3, "multiplicacion");
console.log("Multiplicación:", operacionMultiplicacion);

let operacionDivision = main(20, 0, "division");
console.log("División:", operacionDivision);

let operacionSinDatos = main();
console.log("Sin Datos:", operacionSinDatos);
