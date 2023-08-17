/*19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A 
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El 
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. 
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números 
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado 
de 20. 
*/

let A = new Array(50); //50 números
let B = new Array(20); //20 números

//Relleno con números randoms
for (let index = 0; index < A.length; index++) {
    A[index] = Math.round(Math.random()*10);
}
console.log(A);

//Ordeno de menor a mayor
A.sort((a,b) => a-b)
console.log(A);

//Copiar números de A a B
B = A.slice(0, 10);
console.log(B);

//
for (let j = 0; j < 10; j++) {
    B.push(0.5);
}
console.log("Valor final del Array A: "+A);
console.log("Valor final del Array B: "+B);