var arrayNumeros = [];
var num = 0, suma = 0;

do {
  num = parseInt(prompt("Ingrese un número: "));
  if (num !== 0) {
    arrayNumeros.push(num);
    suma = num + suma;
  } else {
    break;
  }
} while (num !== 0);

if (arrayNumeros.length === 0) {

} else {

  var max = Math.max(...arrayNumeros);
  var min = Math.min(...arrayNumeros);
  console.log("El número menor es: " + min);
  console.log("El número mayor es: " + max);
  console.log("El promedio es: " + suma / arrayNumeros.length);
  console.log(arrayNumeros);
}

/*FALTA SACAR EL PROMEDIO!! */

/*var arrayNumeros = [];
var num;

do {
  num = parseInt(prompt("Ingrese un número: "));
  if (num !== 0) {
    arrayNumeros.push(num);
  } else {
    break;
  }
} while (num !== 0);

if (arrayNumeros.length === 0) {

} else {

  var max = Math.max(...arrayNumeros);
  var min = Math.min(...arrayNumeros);
  console.log("El número menor es: " + min);
  console.log("El número mayor es: " + max);

  console.log(arrayNumeros);
}

/*FALTA SACAR EL PROMEDIO!! */