let frase = prompt("Ingrese una frase");
console.log("frase: "+frase);
let array = frase.split(" ");
console.log("primero: "+array[0])

console.log("array: "+array);
for (let comparar of array) {
    console.log("comparar: " +comparar);
}