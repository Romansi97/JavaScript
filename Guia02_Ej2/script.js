function calcular() {
    var inputradio = document.getElementById("radio");
    var radio = inputradio.value;
    const PI = 3.1416;
    const area = PI * Math.pow(radio, 2);
    var areahtml = document.getElementById("ValorArea");
    areahtml.innerHTML = area;
    const perimetro = 2 * PI * radio;
    var perimetrohtml = document.getElementById("ValorPerimetro");
    perimetrohtml.innerHTML = perimetro;
}