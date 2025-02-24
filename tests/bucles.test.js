// tests/bucles.test.js

const { sumaFor, sumaParesWhile, fibonacci, numeroIngresado, nombres, usuario } = require('../tareas/clase2/bucles');

test('suma de los números del 1 al 100 con bucle for', () => {
    expect(sumaFor).toBe(5050);
});

test('suma de los números pares del 1 al 50 con bucle while', () => {
    expect(sumaParesWhile).toBe(650);
});

test('primeros 5 números de la secuencia de Fibonacci con do-while', () => {
    expect(fibonacci).toEqual([0, 1, 1, 2, 3]);
});

test('numeroIngresado debe ser mayor a 10 después del do-while', () => {
    expect(numeroIngresado).toBeGreaterThan(10);
});

test('el arreglo nombres debe contener nombres y mantenerse igual', () => {
    expect(nombres).toEqual(["Ana", "Juan", "Pedro", "María", "Luis"]);
});

test('el objeto usuario debe tener las claves nombre, edad y país', () => {
    expect(usuario).toMatchObject({
        nombre: expect.any(String),
        edad: expect.any(Number),
        pais: expect.any(String)
    });
});
