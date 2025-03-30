// 1. Introducción a las funciones
// --------------------------------
function saludar(name, age, co) {
    return `Hello, ${name}!` + ` You are ${age} years old.` + ` Your favorite color is ${co}.`;
}
saludar("Gonzalo");
saludar("Fede");
saludar("Rober");


const saludar = function (name) {
    return `Hello, ${name}!`;
}


console.log(saludar("Gonzalo"));


// 2. Funciones vs Métodos
// -----------------------
const user = {
    name: "Gonzalo",
    saludar: function() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(user.saludar());



// 3. Funciones puras e impuras
// ----------------------------
// Función pura
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4)); // 12

// Función impura
let total = 0;

function addToTotal(amount) {
    total += amount;
}
addToTotal(5);
console.log(total); // 5




// 4. Scope, Scope Chain y Hoisting
// --------------------------------
let globalVar = "Soy global";
function example() {
    let localVar = "Soy local";
    console.log(globalVar); // Accede a la variable global
}
example();
console.log(localVar); // ❌ Error: localVar is not defined

// Hoisting con var
console.log(myVar); // undefined (se eleva la declaración, pero no el valor)

var myVar = "Hola";

console.log(myVar); // "Hola"

// Hoisting con let
console.log(myLet); // ❌ Error: Cannot access 'myLet' before initialization
let myLet = "Hola";

// 5. Arrow functions y "this"
// ---------------------------
const obj = {
    value: 42,
    regularFunction: function() {
        console.log(this.value); // 42
    },
    arrowFunction: () => {
        console.log(this.value); // undefined
    }
};
obj.regularFunction();
obj.arrowFunction();


// 6. Closures
// Sirve para encapsular variables y crear funciones privadas
// -----------
function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = contador();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

const increment2 = contador();
console.log(increment2()); // 1
console.log(increment2()); // 2
console.log(increment()); // 4
