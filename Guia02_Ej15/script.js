function CalcularArea(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area;
}

function CalcularPerimetro(radio) {
    let perimetro = 2 * Math.PI * radio;
    return perimetro;
}
const radio = prompt("Ingrese el radio del circulo");
console.log("El área es: " + CalcularArea(radio));
console.log("El perímetro es: " + CalcularPerimetro(radio));
