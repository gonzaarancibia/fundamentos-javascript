// tests/sintaxis-basica.test.js
const sintaxis = require("../tareas/sintaxis-basica");

test("numero debe ser un número", () => {
    expect(typeof sintaxis.numero).toBe("number");
});

test("texto debe ser un string", () => {
    expect(typeof sintaxis.texto).toBe("string");
});

test("esVerdadero debe ser un booleano", () => {
    expect(typeof sintaxis.esVerdadero).toBe("boolean");
});

test("constante debe existir y no ser reasignable", () => {
    expect(() => { sintaxis.constante = "nuevo valor"; }).toThrow();
});

test("operaciones matemáticas deben ser correctas", () => {
    expect(sintaxis.suma).toBe(8);
    expect(sintaxis.resta).toBe(6);
    expect(sintaxis.multiplicacion).toBe(12);
    expect(sintaxis.division).toBe(4);
});

test("saludo debe concatenar correctamente", () => {
    expect(sintaxis.saludo).toBe(`Hola, ${sintaxis.nombre}!`);
});

test("typeof debe devolver los tipos de datos correctos", () => {
    expect(sintaxis.tipoNumero).toBe("number");
    expect(sintaxis.tipoTexto).toBe("string");
    expect(sintaxis.tipoBoolean).toBe("boolean");
    expect(sintaxis.tipoConstante).toBe("string");
});

test("variableCambiante debe poder modificarse", () => {
    let valorInicial = sintaxis.variableCambiante;
    sintaxis.variableCambiante = "Modificado";
    expect(sintaxis.variableCambiante).not.toBe(valorInicial);
});
