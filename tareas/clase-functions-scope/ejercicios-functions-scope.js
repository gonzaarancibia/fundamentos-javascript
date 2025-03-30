// Ejercicios de Funciones y Scope
// ===============================

// 1. Introducción a las funciones
// -------------------------------
// Ejercicio 1.1: Crea una función que reciba un array de números y devuelva la suma de todos ellos
function sumarArray(numeros) {
  // Tu código aquí
}

// Ejercicio 1.2: Crea una función que reciba un string y devuelva el mismo string pero con la primera letra de cada palabra en mayúscula
function capitalizarPalabras(texto) {
  // Tu código aquí
}

// 2. Funciones vs Métodos
// -----------------------
// Ejercicio 2.1: Crea un objeto "calculadora" con métodos para sumar, restar, multiplicar y dividir
const calculadora = {
  // Tu código aquí
};

// Ejercicio 2.2: Extiende el objeto "calculadora" para incluir un método que calcule el porcentaje
// Ejemplo: calculadora.porcentaje(50, 20) debería devolver 10 (el 20% de 50)

// 3. Funciones puras e impuras
// ----------------------------
// Ejercicio 3.1: Convierte esta función impura en una función pura
let contador = 0;
function incrementarContador() {
  contador++;
  return contador;
}

// Ejercicio 3.2: Identifica si las siguientes funciones son puras o impuras y explica por qué
function duplicar(x) {
  return x * 2;
}

const numeros = [1, 2, 3];
function agregarNumero(num) {
  numeros.push(num);
  return numeros;
}

// 4. Scope, Scope Chain y Hoisting
// --------------------------------
// Ejercicio 4.1: Explica qué mostrará cada console.log y por qué
function ejercicioScope() {
  console.log(a); // ¿Qué mostrará?
  var a = 5;
  console.log(a); // ¿Qué mostrará?
  
  if (true) {
    let a = 10;
    console.log(a); // ¿Qué mostrará?
  }
  
  console.log(a); // ¿Qué mostrará?
}

// Ejercicio 4.2: Crea una función que demuestre el concepto de "closure" para crear una variable privada

// 5. Arrow functions y "this"
// ---------------------------
// Ejercicio 5.1: Reescribe la siguiente función como arrow function
function multiplicar(a, b) {
  return a * b;
}

// Ejercicio 5.2: Explica por qué el siguiente código no funciona como se espera y corríjelo
const persona = {
  nombre: "Ana",
  amigos: ["Juan", "Pedro", "María"],
  mostrarAmigos: function() {
    this.amigos.forEach(function(amigo) {
      console.log(this.nombre + " es amigo de " + amigo);
    });
  }
};

// 6. Closures
// -----------
// Ejercicio 6.1: Crea una función "crearContador" que devuelva una función que incremente y devuelva un contador cada vez que se llame
// La función debe aceptar un valor inicial para el contador

// Ejercicio 6.2: Crea una función "crearSaludo" que acepte un saludo base (ej: "Hola") y devuelva una función que salude a una persona
// Ejemplo: const saludarFormalmente = crearSaludo("Estimado/a"); saludarFormalmente("Juan") // "Estimado/a Juan"

// 7. Bind, Call y Apply
// ---------------------
// Ejercicio 7.1: Utiliza call para invocar la función saludar con un objeto persona
function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}

const persona1 = {
  nombre: "Carlos",
  edad: 30
};

// Ejercicio 7.2: Utiliza apply para invocar una función con un array de argumentos
function presentar(saludo, despedida) {
  console.log(`${saludo}, soy ${this.nombre}. ${despedida}`);
}

// Ejercicio 7.3: Utiliza bind para crear una nueva función con un contexto específico
const persona2 = {
  nombre: "Laura",
  edad: 25
};

// Crea una función "saludarPersona2" que esté vinculada a persona2

// Ejercicio 7.4: Crea una función que use bind para limitar el número de veces que se puede llamar a otra función
function crearFuncionLimitada(fn, limite) {
  // Tu código aquí: debe devolver una función que solo se pueda llamar "limite" veces
}


// At the end of the ejercicios-functions-scope.js file, add these exports:

// Exportamos todas las funciones y objetos para que puedan ser utilizados en los tests
module.exports = {
  sumarArray,
  capitalizarPalabras,
  calculadora,
  duplicar,
  agregarNumero,
  crearContador,
  crearSaludo,
  crearFuncionLimitada
};