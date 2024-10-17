const num = Number(prompt("Ingresa el primer número:"));
const num2 = Number(prompt("Ingresa el segundo número:"));
const operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division):");

function calculadora(num, num2, operacion) {

    if (operacion === "suma") {
        function suma(num, num2) {
            return num + num2;
        }
        console.log("Resultado de la suma: "+ suma(num, num2)); 
    }

    else if (operacion === "resta") {
        function resta(num, num2) {
            return num - num2;
        }
        console.log("Resultado de la resta: "+ resta(num, num2));  

    } else if (operacion === "multiplicacion") {
        function multiplicacion(num, num2) {
            return num * num2;
        }
        console.log( "Resultado de la multiplicación: "+ multiplicacion(num, num2));  

    } else if (operacion === "division") {
        if (num2 === 0) {
            console.log("No se puede dividir entre 0");
        } else {
            function division(num, num2) {
                return num / num2;
            }
            console.log("Resultado de la division: "+division(num, num2));  
        }
    } else {
        console.log("Operación no válida.");
    }
}

calculadora(num, num2, operacion);










