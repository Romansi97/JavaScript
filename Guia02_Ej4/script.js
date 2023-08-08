function corroborar() {
    var inputcaracter = document.getElementById("letra");
    var caracter = inputcaracter.value;
    if (caracter == 'N' || caracter == 'n' || caracter == 'S' || caracter == 's') {
        alert("Correcto");
    } else {
        alert("Incorrecto");
    };
};