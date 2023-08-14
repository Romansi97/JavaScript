let array1 = [];
let array2 = [];

for (let index = 0; index < 5; index++) {
    array1[index] = Math.floor(Math.random()*10); /* Math.floor redondea hacia abajo el número para que devuelva entero*/
    array2[index] = Math.floor(Math.random()*10);
};

console.log(array1);
console.log(array2);