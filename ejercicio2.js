// Declarar una variable para la cantidad de cifras
let cantidadCifras;
// Pedir que ingrese un número y lo convertimos a entero
let numero = parseInt(prompt('Ingresa un número:'));
numero = Math.abs(numero)
console.log(numero)
// Verificar si el número ingresado es válido y pedir uno nuevo si no lo es
while (isNaN(numero) || numero >= 1000) {
    numero = parseInt(prompt('Número no válido. Ingresa un número menor que 1000:'));
}
// Determinar la cantidad de cifras según el rango del número
if (numero >= 0 && numero < 10) {
    cantidadCifras = 1;
} else if (numero >= 10 && numero < 100) {
    cantidadCifras = 2;
} else if (numero >= 100 && numero < 1000) {
    cantidadCifras = 3;
}

// Comprobar el resultado en la consola
console.log(`El número ${numero} tiene ${cantidadCifras} cifra(s).`);
