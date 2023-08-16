/*17. Realizar un programa que elimine  los dos últimos elementos de un array. Mostrar el 
resultado*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Muestro el array completo: "+array);
array.splice(array.length-2,array.length);
console.log("El array final es: "+array);