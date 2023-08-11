function Personas(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}

var persona1 = new Personas('Roman', 25, 'H', 63, 1.75);
var persona2 = new Personas('Marta', 34, 'M', 55, 1.6);
console.log(persona1);
console.log(persona2);

console.log("Mostramos los nombres únicamente: "+persona1.nombre+" y "+persona2.nombre);

console.log("Si modificamos el nombre Román por Joaquin, quedaría lo siguiente: ");
persona1.nombre = 'Joaquin';

console.log(persona1);