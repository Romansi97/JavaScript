
resultado = 0;
var num1 = parseInt (prompt("Ingrese el primer valor entero: "));
var num2 = parseInt (prompt("Ingrese el segundo valor entero: "));
var opc = prompt("Que calculo desea realizar: ", "[S = +] | [R = -] | [D = /] | [M = x]");
switch (opc.toLowerCase()) {
    case 's':
        resultado = num1 + num2;
        break;
    case 'r':
        resultado = num1 - num2;
        break;
        case 'd':
            resultado = num1 / num2;
            break;
            case 'm':
                resultado = num1 * num2;
                break;
    default:
        alert("El caracter ingresado es incorrecto.");
        break;
};
    alert("El resultado es: "+resultado);
    