const { add } = require('../index');

describe('Testando função add', () => {
    test('Somando 2 + 2 deve resultar em 4', () => {
        expect(add(2, 2)).toBe(4);
    });

    test('Somando -1 + 5 deve resultar em 4', () => {
        expect(add(-1, 5)).toBe(4);
    });
});