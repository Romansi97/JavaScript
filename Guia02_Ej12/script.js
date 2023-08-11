/* EL USUARIO INGRESA EL DATO:
function TipoDeDato(devolver) {
    if (!isNaN(devolver)) {
        if (devolver.includes('.')) {
            return 'float';
        } else {
            return 'integer';
        }
    } else if (devolver === 'true' || devolver === 'false') {
        return 'boolean';
    } else if (devolver === 'null') {
        return 'null';
    } else if (!isNaN(Date.parse(devolver))) {
        return 'date';
    } else {
        return 'string';
    }
}

let devolver = prompt("Ingrese cualquier dato");
console.log(TipoDeDato(devolver));
*/

/* TIPOS DE DATOS:

let TipoDeDato = (devolver) => {
    return typeof devolver;
};

console.log(TipoDeDato(5));
console.log(TipoDeDato("hola"));
console.log(TipoDeDato(true));
console.log(TipoDeDato(null));
*/