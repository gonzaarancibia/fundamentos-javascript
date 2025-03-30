// Tests para los ejercicios de funciones y scope

// Para ejecutar estos tests:
// 1. Instala Jest: npm install --save-dev jest
// 2. Agrega en package.json: "scripts": { "test": "jest" }
// 3. Ejecuta: npm test

const {
  sumarArray,
  capitalizarPalabras,
  calculadora,
  duplicar,
  agregarNumero,
  crearContador,
  crearSaludo,
  crearFuncionLimitada
} = require('./ejercicios-functions-scope');

// 1. Introducción a las funciones
describe('Ejercicios de introducción a funciones', () => {
  test('sumarArray debe sumar todos los números del array', () => {
    expect(sumarArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumarArray([-1, 1])).toBe(0);
    expect(sumarArray([])).toBe(0);
  });

  test('capitalizarPalabras debe convertir a mayúscula la primera letra de cada palabra', () => {
    expect(capitalizarPalabras('hola mundo')).toBe('Hola Mundo');
    expect(capitalizarPalabras('javascript es genial')).toBe('Javascript Es Genial');
    expect(capitalizarPalabras('')).toBe('');
  });
});

// 2. Funciones vs Métodos
describe('Ejercicios de calculadora', () => {
  test('calculadora debe tener métodos para operaciones básicas', () => {
    expect(calculadora.sumar(5, 3)).toBe(8);
    expect(calculadora.restar(10, 4)).toBe(6);
    expect(calculadora.multiplicar(3, 3)).toBe(9);
    expect(calculadora.dividir(10, 2)).toBe(5);
  });

  test('calculadora debe calcular porcentajes correctamente', () => {
    expect(calculadora.porcentaje(100, 20)).toBe(20);
    expect(calculadora.porcentaje(50, 10)).toBe(5);
  });
});

// 3. Funciones puras e impuras
describe('Ejercicios de funciones puras e impuras', () => {
  test('duplicar debe ser una función pura', () => {
    expect(duplicar(4)).toBe(8);
    expect(duplicar(4)).toBe(8); // Llamada repetida debe dar el mismo resultado
  });
});

// 5. Arrow functions
describe('Ejercicios de arrow functions', () => {
  test('multiplicar como arrow function debe funcionar correctamente', () => {
    // Asumiendo que has reescrito multiplicar como arrow function
    expect(multiplicar(3, 4)).toBe(12);
    expect(multiplicar(0, 5)).toBe(0);
  });
});

// 6. Closures
describe('Ejercicios de closures', () => {
  test('crearContador debe crear un contador que incremente', () => {
    const contador1 = crearContador(0);
    expect(contador1()).toBe(1);
    expect(contador1()).toBe(2);
    
    const contador2 = crearContador(10);
    expect(contador2()).toBe(11);
  });

  test('crearSaludo debe crear una función que salude', () => {
    const saludarFormalmente = crearSaludo('Estimado/a');
    const saludarInformalmente = crearSaludo('Hola');
    
    expect(saludarFormalmente('Juan')).toBe('Estimado/a Juan');
    expect(saludarInformalmente('María')).toBe('Hola María');
  });
});

// 7. Bind, Call y Apply
describe('Ejercicios de bind, call y apply', () => {
  test('crearFuncionLimitada debe limitar el número de llamadas', () => {
    const funcionOriginal = jest.fn(() => 42);
    const funcionLimitada = crearFuncionLimitada(funcionOriginal, 2);
    
    expect(funcionLimitada()).toBe(42);
    expect(funcionLimitada()).toBe(42);
    expect(funcionLimitada()).toBeUndefined(); // Ya no debería funcionar
    expect(funcionOriginal.mock.calls.length).toBe(2);
  });
});