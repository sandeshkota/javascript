var repeater = require("./utility")

test('repeat message by the count', () => {
    expect(repeater('hello', 2)).toBe('hellohello');
});
