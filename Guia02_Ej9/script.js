var frase = prompt("Ingrese una frase.");
var frasefinal = " ";
for (let i = 0; i < frase.length; i++) {
    frasefinal += frase.substring( i, i+1) + " ";
}
console.log(frasefinal);
