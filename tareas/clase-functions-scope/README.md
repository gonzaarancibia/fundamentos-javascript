# JavaScript Functions and Scope

Este documento explica los conceptos fundamentales de funciones y scope en JavaScript cubiertos en la clase.

[📺 Ver el video de la clase](https://drive.google.com/file/d/1t8sWlkKfyM6E-hGAHJnSZTYhAt4YwPSA/view?usp=sharing)

## 1. Introducción a las Funciones

Las funciones en JavaScript son bloques de código reutilizables que pueden ser declaradas de diferentes maneras:

- **Declaración de función**: La forma tradicional de definir una función.
  ```javascript
  function saludar(name, age, co) {
      return `Hello, ${name}!` + ` You are ${age} years old.` + ` Your favorite color is ${co}.`;
  }

- Expresión de función : Asignar una función anónima a una variable.
  ```javascript
  const saludar = function(name) {
      return `Hello, ${name}!`;
  }
   ```
## 2. Funciones vs Métodos
- Funciones : Bloques de código independientes.
- Métodos : Funciones que pertenecen a un objeto y pueden acceder a sus propiedades mediante this .
```javascript
const user = {
    name: "Gonzalo",
    saludar: function() {
        return `Hello, my name is ${this.name}`;
    }
};
 ```

## 3. Funciones Puras e Impuras
- Funciones puras : No tienen efectos secundarios y siempre devuelven el mismo resultado para los mismos argumentos.
  
  ```javascript
  function multiply(a, b) {
      return a * b;
  }
   ```
- Funciones impuras : Modifican estados externos o dependen de ellos.
  
  ```javascript
  let total = 0;
  function addToTotal(amount) {
      total += amount;
  }
   ```
## 4. Scope, Scope Chain y Hoisting
- Scope : Define la accesibilidad de variables y funciones en diferentes partes del código.
  
  - Scope global : Variables declaradas fuera de cualquier función.
  - Scope local : Variables declaradas dentro de una función.
- Hoisting : Comportamiento de JavaScript donde las declaraciones de variables y funciones son movidas al inicio de su scope.
  
  - Con var : La declaración se eleva, pero no la inicialización.
  - Con let y const : Se eleva la declaración pero queda en "temporal dead zone" hasta la inicialización.
## 5. Arrow Functions y "this"
- Arrow functions : Sintaxis más concisa para definir funciones.
- Comportamiento de "this" :
  - En funciones regulares: this se refiere al objeto que llama a la función.
  - En arrow functions: this se hereda del contexto en el que se define la función.
```javascript
const obj = {
    value: 42,
    regularFunction: function() {
        console.log(this.value); // 42
    },
    arrowFunction: () => {
        console.log(this.value); // undefined
    }
};
 ```

## 6. Closures
Los closures son funciones que "recuerdan" el entorno en el que fueron creadas, permitiendo:

- Encapsular variables
- Crear funciones privadas
- Mantener estado entre llamadas
```javascript
function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
 ```

Los closures son útiles para crear contadores, funciones de fábrica y para implementar patrones de diseño como el módulo.

## Instrucciones para ejecutar los tests

Para comprobar tus soluciones a los ejercicios, sigue estos pasos:

### Paso 1: Instalar Jest

Jest es una herramienta que nos permite probar nuestro código. Para instalarlo, abre una terminal (Command Prompt o PowerShell) en la carpeta del proyecto y escribe:


```plaintext
 npm install --save-dev jest

```

plaintext

npm install --save-dev jest

### Paso 2: Ejecutar los tests

Para ejecutar todos los tests:


```
npm test

```

Para ejecutar un test específico (por ejemplo, solo los tests de funciones):

```
npm test -- -t "ejercicios-functions-scope"

```
Para ejecutar tests que contengan una palabra clave:

```
npm test -- -t "calculadora"
```
Paso 4: Interpretar los resultados
✅ Verde: El test ha pasado correctamente
❌ Rojo: El test ha fallado
Si un test falla, Jest te mostrará:

Lo que esperaba recibir
Lo que realmente recibió
En qué línea está el error
¡No te preocupes si no pasan todos los tests a la primera! Revisa tu código, haz los cambios necesarios y vuelve a ejecutar los tests hasta que todos pasen.