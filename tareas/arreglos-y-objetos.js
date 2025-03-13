// tareas/arreglos-objetos.js

// <---Arreglos y Objetos--->

// Crea un arreglo vacío llamado 'frutas'
let frutas = [];

// Agrega al menos 3 frutas al arreglo
frutas.push("manzana,naranja,pera");
// Crea un objeto llamado 'persona' con las propiedades: nombre, edad y ciudad
let persona = { 
    nombre: "pedro",
    edad:30,
    ciudad:cadiz
};

// Agrega una nueva propiedad al objeto 'persona': profesion
persona.profesion =ingeniero
// <---Manipulación de arreglos --->

// Agrega un elemento al final del arreglo 'frutas'
frutas.push("mandarina");
// Elimina el primer elemento del arreglo 'frutas'

// Encuentra la longitud del arreglo 'frutas' y guárdala en una variable
let longitudFrutas = longitudFrutas ;

// Manipulación de objetos
// Accede a la propiedad 'nombre' del objeto 'persona' y guárdala en una variable
let nombrePersona =persona.nombre;

// Modifica la propiedad 'edad' de 'persona'
persona.edad =35;
// Elimina la propiedad 'ciudad' del objeto 'persona'
delete persona.ciudad;
module.exports = {
    frutas:frutas,
    persona:persona,
    longitudFrutas:longitudfrutas,
    nombrePersona :nombrePersona,
};
