// tareas/arreglos-objetos.js

// <---Arreglos y Objetos--->

// Crea un arreglo vacío llamado 'frutas'
let frutas =[];
// Agrega al menos 3 frutas al arreglo
  frutas.push("manzana");
  frutas.push("bananas");
  frutas.push("naranja");

// Crea un objeto llamado 'persona' con las propiedades: nombre, edad y ciudad
  
  let persona={
    nombre:"teresa",
    edad:53,
    ciudad:"algeciras",
   }
   
// Agrega una nueva propiedad al objeto 'persona': profesion
persona.profesion= "cocinera"
// <---Manipulación de arreglos --->
    

// Agrega un elemento al final del arreglo 'frutas'
frutas.push("kiwi");

// Elimina el primer elemento del arreglo 'frutas'
frutas.shift();

// Encuentra la longitud del arreglo 'frutas' y guárdala en una variable
let longitudFrutas= frutas.length

// Manipulación de objetos
// Accede a la propiedad 'nombre' del objeto 'persona' y guárdala en una variable
let nombrePersona = persona.nombre;

// Modifica la propiedad 'edad' de 'persona'
persona.edad = 50;
// Elimina la propiedad 'ciudad' del objeto 'persona'

module.exports = {
    frutas,
    persona,
    longitudFrutas,
    nombrePersona
};
