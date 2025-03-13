// tareas/operadores.js

// Operadores Lógicos
// Usa operadores lógicos para evaluar las siguientes condiciones:
// - Si ambos valores son positivos (num1 > 0 Y num2 > 0)
// - Si al menos uno de los valores es negativo (num1 < 0 O num2 < 0)
// - Si num1 es par Y num2 es impar
// - Si num1 está en el rango de 10 a 50 (inclusive)
let num1 = 10;
let num2 = 5;

 
  //let ambosPositivos = num1 > 0 && num2 > 0;
let algunoNegativo = num1 < 0 || num2 < 0;
 let parImpar = num1 % 2 === 0 && num2 % 2 !== 0 ;
let enRango = (num1 >= 10 && num1 <= 50);

// Operador Ternario
// Usa el operador ternario para evaluar las siguientes condiciones y asignar un mensaje:
// - Si num1 es mayor que num2 -> "num1 es mayor"
// - Si num1 es igual a num2 -> "Son iguales"
// - Si num1 es menor que num2 -> "num1 es menor"
let comparacion = num1 > num2 ?"num1 es mayor" :"num1 no es mayor";//mum1 es mayor

// Usa el operador ternario para asignar "Aprobado" si la calificación es mayor o igual a 60, sino "Reprobado"
let calificacion =num1 > num2 
?"num1 es mayor" 
: num1 < num2 
? "num1 es menor"
: "son iguales";
let estadoCalificacion = num1 < num2 
?"num1 es menor" 
:"num 1 no es menor";  //num1 no es menor.

// Usa el operador ternario para verificar si un usuario tiene permiso de acceso (isAdmin es true)
let isAdmin = true; // si da true , acceso permitido,si da falso acceso denbegado.
let acceso = asAdmin ? "Acceso permitido" : "Acceso denegado";
 console.log(c === d); 

module.exports = {
    num1,
    num2,
    ambosPositivos,
    algunoNegativo,
    parImpar,
    enRango,
    comparacion,
    calificacion,
    estadoCalificacion,
    isAdmin,
    acceso,
};
