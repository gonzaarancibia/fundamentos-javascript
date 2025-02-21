// tests/arreglos-objetos.test.js
const datos = require("../tareas/arreglos-y-objetos");

test("frutas debe ser un arreglo", () => {
    expect(Array.isArray(datos.frutas)).toBe(true);
});

test("frutas debe contener al menos 3 elementos", () => {
    expect(datos.frutas.length).toBeGreaterThanOrEqual(3);
});

test("persona debe ser un objeto con propiedades nombre, edad y ciudad", () => {
    expect(datos.persona).toHaveProperty("nombre");
    expect(datos.persona).toHaveProperty("edad");
    expect(datos.persona).toHaveProperty("ciudad");
});

test("persona debe tener una nueva propiedad 'profesion'", () => {
    expect(datos.persona).toHaveProperty("profesion");
});

test("Debe agregar un elemento al final del arreglo frutas", () => {
    let longitudInicial = datos.frutas.length;
    datos.frutas.push("kiwi");
    expect(datos.frutas.length).toBe(longitudInicial + 1);
});

test("Debe eliminar el primer elemento del arreglo frutas", () => {
    let primerElemento = datos.frutas[0];
    datos.frutas.shift();
    expect(datos.frutas[0]).not.toBe(primerElemento);
});

test("Debe obtener la longitud del arreglo frutas", () => {
    expect(typeof datos.longitudFrutas).toBe("number");
    expect(datos.longitudFrutas).toBe(datos.frutas.length);
});

test("Debe acceder a la propiedad 'nombre' del objeto persona", () => {
    expect(datos.nombrePersona).toBe(datos.persona.nombre);
});

test("Debe modificar la propiedad 'edad' de persona", () => {
    let edadOriginal = datos.persona.edad;
    datos.persona.edad = 99;
    expect(datos.persona.edad).not.toBe(edadOriginal);
});

test("Debe eliminar la propiedad 'ciudad' del objeto persona", () => {
    delete datos.persona.ciudad;
    expect(datos.persona).not.toHaveProperty("ciudad");
});
