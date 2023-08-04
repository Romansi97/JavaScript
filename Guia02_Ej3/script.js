function calcular() {
    var inputedad = document.getElementById("MayoroMenor");
    var edad = inputedad.value;
    if (edad >= 18) {
        alert("El usuario es mayor de edad.");
    } else {
        alert("El usuario es menor de edad.");
    };
};