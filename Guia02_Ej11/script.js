function palabraMasLarga(frase) {
    let array = frase.split(" ");
    let palabraMasLarga = "";

    for (let i = 0; i < array.length; i++) {
        if (palabraMasLarga.length < array[i].length) {
            palabraMasLarga = array[i];
        }
    }
    return palabraMasLarga;
}

let frase = prompt("Ingrese una frase");
let resultado = palabraMasLarga(frase);
console.log(resultado);


