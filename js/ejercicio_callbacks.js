// ejercicio_callbacks.js

// 1. Función validar_numero(callback)
function validar_numero(callback) {
    let dato = prompt("Ingrese un número:");
    if (!isNaN(dato) && dato.trim() !== "" && dato !== null) {
        callback(true, Number(dato));
    } else {
        callback(false, null);
    }
}

// 2. Función calcular_y_avisar_despues(numero, callback)
function calcular_y_avisar_despues(numero, callback) {
    let sumatoria = 0;
    for (let i = 1; i <= numero; i += 2) {
        sumatoria += i;
    }
    setTimeout(() => {
        callback(sumatoria);
    }, 5000);
}

// 3. Función calcular_y_avisar_dependiendo(numero, callback, callback_error)
function calcular_y_avisar_dependiendo(numero, callback, callback_error) {
    let resultado = 0;
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += j;
        }
    }
    if (resultado < 1000) {
        callback(numero, resultado);
    } else {
        callback_error(numero, resultado);
    }
}

// Ejemplo de uso:
// 1. Validar número
validar_numero(function (exito, valor) {
    if (exito) {
        console.log("Correcto: Usted ingresó el número " + valor);
        // 2. Calcular sumatoria de impares y avisar después de 5 segundos
        calcular_y_avisar_despues(valor, function (sumatoria) {
            console.log(`El valor de la sumatoria es ${sumatoria}. Este resultado se obtuvo hace 5 segundos.`);
            // 3. Calcular sumatorias sucesivas y avisar dependiendo del resultado
            calcular_y_avisar_dependiendo(valor,
                function (num, res) {
                    console.log(`Las sumatorias sucesivas de ${num} es ${res}`);
                },
                function (num, res) {
                    console.error(`El número ${num} sobrepasa el objetivo de la función. Resultado obtenido: ${res}`);
                }
            );
        });
    } else {
        console.error("Error: Usted ingresó caracteres incorrectos");
    }
});
