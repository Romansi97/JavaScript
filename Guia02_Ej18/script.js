/*18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
dos elementos numéricos*/

function CompararTextos(valores) {
    console.log(valores);
    let texto = [];

    //Si no conozco la posición lo hago de esta manera
    for (let i = 0; i < valores.length; i++) {
        if (typeof valores[i] === "string") {
            texto.push(valores[i]); //El push añade valores en las posiciones seguidas del array. Si no se usaría, quedaría así: texto{ , , , "hola", "adios", }  
        } //En este caso queda texto{"hola","adios"}
    };

    if (texto[0].length > texto[1].length) {
        console.log("El texto mayor es: " + texto[0]);
    } else if (texto[0].length < texto[1].length) {
        console.log("El texto mayor es: " + texto[1]);
    } else {
        console.log("Ambos textos son igual de largos.");
    };

}

function TrueOFalse(valores) {
    let resultado = true;
    if (valores[0] === true || valores[2] === true) {
        resultado = true;
        console.log(resultado);
    };
    if (valores[0] === true && valores[2] === false) {
        resultado = false;
        console.log(resultado);
    };
}

function Operaciones(valores) {
    console.log("Suma: " + valores[1] + valores[5]);
    let resta = valores[1] - valores[5];
    console.log("Resta: " + resta);
    console.log("Multiplicación: " + valores[1] * valores[5]);
    console.log("División: " + valores[1] / valores[5]);
    console.log("Modulo: " + valores[1] % valores[5]);
}

var valores = [true, 5, false, "hola", "adios", 2];
CompararTextos(valores);
TrueOFalse(valores);
Operaciones(valores);