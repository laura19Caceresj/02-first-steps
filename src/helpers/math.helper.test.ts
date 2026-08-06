import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper';



//test for add
describe('add', () => {

    test('should add two positives numbers', () => {
        // ! 1.Arrange
        const a = 1;
        const b = 2;

        // ! 2.Act
        const result = add(1, 3);

        // ! 3.Assert
        expect(result).toBe(4);
    });

});

//test for subtract
describe('subtract', () => {
    test('should subtract to negative numbers', () => {
        const a = 48;
        const b = 21;

        const result = subtract(a, b);
        console.log({ result });

        expect(result).toBe(a - b);
    });

    test('should subtract to negative numbers', () => {
        const a = 20;
        const b = 2;

        const result = subtract(a, b);

        console.log({ result });
        expect(result).toBe(a - b);
    });


});


//test for multiply
describe('multiply', () => {
    test('should multiply to positives numbers', () => {
        const a = 20;
        const b = 2;

        const result = multiply(a, b);
        console.log({ result });
        expect(result).toBe(a * b);
    });

    test('should multiply to positives numbers', () => {
        const a = 3;
        const b = 2;

        const result = multiply(a, b);
        console.log({ result });
        expect(result).toBe(a * b);
    })


});