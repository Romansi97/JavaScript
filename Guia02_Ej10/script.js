let reves = (palabra) => {
    var palabraReverso = " ";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraReverso += palabra[i];
    }
    return palabraReverso;
}
let palabra = prompt("Ingrese una palabra");
console.log(reves(palabra));

