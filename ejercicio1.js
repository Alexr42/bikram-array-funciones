// Crear un array para guardar los números
let arrayNumeros = [];

// Establecer número más grande como 0
let numeroMayor = 0;

// concretar cuántos números queremos tener en el array
let cuantosNumeros = 3;

// Pedir que escriba tres números
for (let i = 0; i < cuantosNumeros; i++) {
    // Pedir que escriba un número y lo guardamos en el array comprobando que es un numero
    let numero = parseInt(prompt('Escribe un nmero:'));

    // Si lo escrito no es un número, se le pide que lo intente otra vez
    while (isNaN(numero)) {
        numero = parseInt(prompt('No se detectan números, escribe un número:'));
    }

    // Guardar el número en el array
    arrayNumeros.push(numero);
}

// Buscar el número más grande en la lista
for (let numero of arrayNumeros) {
    // Si se encuentra un número más grande, se establece
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
}

// Mostrar todos los números y decir cuál es el más grande
console.log('Tus números: ' + arrayNumeros.join(', '));
console.log('El número más grande es: ' + numeroMayor);
