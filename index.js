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
        elevar = elevar * a;
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

//9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(primo){
    if (primo <= 1) {
        return false;
    }
    for (let i = 2; i < primo; i++) {
        if (primo % i === 0) {
            return false;
        }
    }
    return true;
}

//MEZCLANDO ARRAYS Y FUNCIONES
//10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
function ordenarArray(ordenar) {
    ordenar.sort(
        //funcion de comparacion, toma 2 argumentos(a y b) y resta b de a. Si el resultado es negativo, significa que a debería ir antes que b, y si es positivo, b va antes que a.
        function(a, b) {
        return a - b;
    });
    return ordenar;
}
//11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
function obtenerPares(par) {
    let pares = [];
    for (let i = 0; i < par.length; i++) {
        if (par[i] % 2 === 0) {
            pares.push(par[i]);
        }
    }
    return pares;
}
//12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
function pintarArray(cadena){
    //El metodo map se utiliza para crear un nuevo array aplicando una función a cada elemento del original. La función String convierte cada elemento del array (cadena) a un string.
    //El método .join une los elementos del nuevo array en una sola cadena. La especificacion dentro de su parentesis es como se separa cada elemento del array.
    return `[${cadena.map(String).join(', ')}]`;
}
//13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
function arrayMapi(array, funcion) {
    return array.map(funcion);
}
//14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
function eliminarDuplicados(duplicado) {
    //array auxiliar (unicos) para almacenar los elementos únicos y bucle para iterar sobre los elementos del array.
    let unicos = [];
    for (let elemento of duplicado) {
        if (!unicos.includes(elemento)) {
            unicos.push(elemento);
        }
    }
    return unicos;
}
//15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
//16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ["Hola", "Mundo"]
//17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]
//18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]]
//19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
function multiplicacion(nr1, nr2){
    resultado = nr1 * nr2;
    return resultado;
}
//20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(nr1, nr2){
    resultado = nr1 / nr2;
    return resultado
}
//21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(numero){
    return numero % 2 === 0;
}
//22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
let arrayFunciones = [
    function suma(a, b) {
        return a + b;
    },
    function resta(a, b) {
        return a - b;
    },
    function multiplicacion(a, b) {
        return a * b;
    }
];
//23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
function ordenarArray2(mayorAMenor){
    return mayorAMenor.sort(function(a, b) {
        return b - a;
    });
}
//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
function obtenerImpares(impares) {
    //el metodo .filter sirve para filtrar elementos de un array según un criterio específico y crear un nuevo array con los elementos que cumplen con ese criterio
    return impares.filter(function(numero) {
        return numero % 2 !== 0;
    });
}
//25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
function sumarArray(sumar) {
    let suma = 0;
    for (let i = 0; i < sumar.length; i++) {
        suma = suma + sumar[i];
    }
    return suma;
}
//26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
function multiplicarArray(multiplicar) {
    let por = 1;
    for (let i = 0; i < multiplicar.length; i++) {
        por = por * multiplicar[i];
    }
    return por;
}
  