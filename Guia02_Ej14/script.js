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

    console.log(libro1);

/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
numero de páginas*/