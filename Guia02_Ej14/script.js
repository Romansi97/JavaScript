/* CREO VARIOS OBJETOS: */
function Libros(isbn, titulo, autor, npaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.npaginas = npaginas;
}

function IngresarDatos() {
    this.isbn = prompt("Ingrese el ISBN del libro:");
    this.titulo = prompt("Ingrese el titulo del libro:");
    this.autor = prompt("Ingrese el autor del libro:");
    this.npaginas = prompt("Ingrese la cantidad de páginas del libro:");
}

IngresarDatos();
var libro1 = new Libros(this.isbn, this.titulo, this.autor, this.npaginas);
IngresarDatos();
var libro2 = new Libros(this.isbn, this.titulo, this.autor, this.npaginas);

console.log(libro1);
console.log(libro2);

/* CREANDO SIN METODO:

function Libros(isbn, titulo, autor, npaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.npaginas = npaginas;
}
    var isbn = prompt("Ingrese el ISBN del libro:");
    var titulo = prompt("Ingrese el titulo del libro:");
    var autor = prompt("Ingrese el autor del libro:");
    var npaginas = prompt("Ingrese la cantidad de páginas del libro:");
    
    var libro1 = new Libros(isbn, titulo, autor, npaginas);

    console.log(libro1);*/