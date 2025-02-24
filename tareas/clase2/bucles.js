// tareas/bucles.js

// Bucles en JavaScript

// 1. Bucle 'for'
// - Usa un bucle 'for' para imprimir los números del 1 al 10 en la consola.
// - Usa un bucle 'for' para sumar los números del 1 al 100 y guardar el resultado en una variable.

let sumaFor;

// 2. Bucle 'while'
// - Usa un bucle 'while' para imprimir los números del 10 al 1 en la consola.
// - Usa un bucle 'while' para sumar los números pares del 1 al 50 y guardar el resultado en una variable.

let sumaParesWhile;

// 3. Bucle 'do-while'
// - Usa un bucle 'do-while' para imprimir los primeros 5 números de la secuencia de Fibonacci.
// - Usa un bucle 'do-while' para pedir un número al usuario hasta que ingrese un número mayor a 10.

let fibonacci;
let numeroIngresado;

// 4. Iterar sobre arreglos
// - Usa un bucle 'for' para recorrer un arreglo de nombres y mostrar cada uno en la consola.
// - Usa un bucle 'forEach' para hacer lo mismo.

let nombres = ["Ana", "Juan", "Pedro", "María", "Luis"];

// 5. Iterar sobre objetos
// - Usa un bucle 'for-in' para recorrer un objeto con información de un usuario y mostrar cada clave y valor.
// - Usa 'Object.entries()' con 'forEach' para hacer lo mismo.

let usuario = {
    nombre: "Carlos",
    edad: 30,
    pais: "Argentina"
};

module.exports = {
    sumaFor,
    sumaParesWhile,
    fibonacci,
    numeroIngresado,
    nombres,
    usuario,
};
