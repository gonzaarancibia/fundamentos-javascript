const {
    sumaFor,
    sumaParesWhile,
    numero,
    nombres,
    usuario
} = require('../../tareas/clase2/bucles.js');

describe('Bucles exercises', () => {
    test('sumaFor should correctly sum numbers from 1 to 100', () => {
        const expectedSum = 5050; // Gauss formula: n(n+1)/2
        expect(sumaFor).toBe(expectedSum);
    });

    test('sumaParesWhile should correctly sum even numbers from 1 to 50', () => {
        const expectedSum = 650; // Sum of even numbers: 2+4+6+...+50
        expect(sumaParesWhile).toBe(expectedSum);
    });

    test('random number should be greater than 10', () => {
        expect(numero).toBeGreaterThan(10);
        expect(numero).toBeLessThanOrEqual(20);
    });

    test('nombres array should contain correct names', () => {
        const expectedNames = ["Ana", "Juan", "Pedro", "María", "Luis"];
        expect(nombres).toEqual(expectedNames);
    });

    test('nombres array should be iterable with forEach', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        nombres.forEach(nombre => console.log(nombre));
        
        expect(consoleSpy).toHaveBeenCalledTimes(5);
        nombres.forEach(nombre => {
            expect(consoleSpy).toHaveBeenCalledWith(nombre);
        });
        
        consoleSpy.mockRestore();
    });

    test('usuario object should have correct properties and values', () => {
        expect(usuario).toEqual({
            nombre: 'Carlos',
            edad: 30,
            pais: 'Argentina'
        });
    });

    test('usuario object should be iterable with for-in', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        for (let prop in usuario) {
            console.log(`${prop}: ${usuario[prop]}`);
        }
        
        expect(consoleSpy).toHaveBeenCalledWith('nombre: Carlos');
        expect(consoleSpy).toHaveBeenCalledWith('edad: 30');
        expect(consoleSpy).toHaveBeenCalledWith('pais: Argentina');
        
        consoleSpy.mockRestore();
    });

    test('usuario object should be iterable with Object.entries()', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        Object.entries(usuario).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
        
        expect(consoleSpy).toHaveBeenCalledWith('nombre: Carlos');
        expect(consoleSpy).toHaveBeenCalledWith('edad: 30');
        expect(consoleSpy).toHaveBeenCalledWith('pais: Argentina');
        
        consoleSpy.mockRestore();
    });
});