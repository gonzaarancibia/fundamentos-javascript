// tareas/bucles.js

// Bucles en JavaScript

// 1. Bucle 'for'
// - Usa un bucle 'for' para imprimir los números del 1 al 10 en la consola.
// - Usa un bucle 'for' para sumar los números del 1 al 100 y guardar el resultado en una variable.
for (let i = 1; i<= 10; i++){ 
    console.log (i);
}
let sumaFor = 0;
for (let i = 1; i<= 100; i++) { 
    sumaFor += i;
}
console. log("la suma es:",sumaFor);
// 2. Bucle 'while'
// - Usa un bucle 'while' para imprimir los números del 10 al 1 en la consola.
// - Usa un bucle 'while' para sumar los números pares del 1 al 50 y guardar el resultado en una variable.
let sumaParesWhile = 0; 
let i = 1;
while (i<= 50) { 
    if (i % 2 === 0){
        sumaParesWhile +=i;
    }
    i++;
}
// 3. Bucle 'do-while'
// - Usa un bucle 'do-while' para imprimir los primeros 5 números de la secuencia de Fibonacci.
// - Usa un bucle 'do-while' para pedir un número al usuario hasta que ingrese un número mayor a 10.

let fibonacci = {};
let a = 0;
let b = 1;
let count = 0
let numeroIngresado  = 5;
fibonacci. push(a);
do { 
    fibonacci.push(b);
    let temp =a + b ;
a = b;
b = temp;
count++;
} while (count < numeroIngresado -1);
 
let numero;
do { 
  numero = parseInt(prompt("Por favor,ingrese un numeromayor a 10:"),10)
 if (numero<=10) { 
    console.log("El numero ingresado es menor o igual a 10.Intrntalo de nuevo.");
 }
}while (numero<=10);
console.log("¡gracias! El numero ingresado es: " + numero);

// 4. Iterar sobre arreglos
// - Usa un bucle 'for' para recorrer un arreglo de nombres y mostrar cada uno en la consola.


let nombres = ["Ana", "Juan", "Pedro", "María", "Luis"];

for (let i = 0; i <nombres. length; i++) { 
    console.log(nombres[i]);

}
// - Usa un bucle 'forEach' para hacer lo mismo. 

 
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
