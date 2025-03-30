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
// - Usa un bucle 'do-while' para generar números aleatorios hasta obtener uno mayor a 10.

let numero;
do {
    // Generate a random number between 1 and 20
    numero = Math.floor(Math.random() * 20) + 1;
    if (numero <= 10) {
        console.log(`Generated number ${numero} is less than or equal to 10. Trying again...`);
    }
} while (numero <= 10);
console.log(`Success! Generated number is: ${numero}`);
// 4. Iterar sobre arreglos
// - Usa un bucle 'for' para recorrer un arreglo de nombres y mostrar cada uno en la consola.


let nombres = ["Ana", "Juan", "Pedro", "María", "Luis"];

for (let i = 0; i <nombres.length; i++) { 
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
    numero,      // Added numero to exports
    nombres,
    usuario,
};
