//ARRAYS
//1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = []
//2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0, 2, 4, 6, 8]
//4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]]
//FUNCIONES
//5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
function suma(num1, num2) {
    var resultado = num1 + num2;
    return resultado;
}
//6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potenciacion(a, b){
    let elevar = 1;
    for (let i = 0; i < b; i++) {
        elevar *= a;
    }
    return elevar;
}
//7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
function separarPalabras(separar){
    let palabras = separar.split(' ');
    return palabras;
}
//8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
function repetirString(string, numero){
    if (numero <= 0) {
        return '';
    }
    let repetir = '';
    for (let i = 0; i < numero; i++) {
        repetir = repetir.concat(string);
    }
    return repetir;
}
