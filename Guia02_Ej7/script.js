var num1 = parseInt(prompt("Ingrese un número límite entero: "));
let aux = 0;
do {
    var num2 = parseInt(prompt("Ingrese un número entero: "));
    aux += num2;
    alert(aux);
} while (num1 >= aux);
alert("La suma pasó el límite indicado");