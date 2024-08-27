const { add } = require('./calculator');

test('add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
});