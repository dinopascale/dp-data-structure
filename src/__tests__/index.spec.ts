import {sum, multiply} from '../index';

test('Sum 4 + 5 = 9', () => {
    expect(sum(4,5)).toBe(9)
})

test('Multiply 3 * 5 = 15', () => {
    expect(multiply(3, 5)).toBe(15);
})
