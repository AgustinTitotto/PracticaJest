//Common Matchers
test("2 plus 2 is equal to 4", () => {
    expect(2 + 2).toBe(4);
});

/*test("2 plus 2 is equal to 5", () => {  test fails
    expect(2+2).toBe(5);
})*/

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one:1, two:2}); // toEqual is for value of an object
});

test('the sum of two negatives is not 0', () => {
    for (let i = -1; i > -10; i--) {
        for (let j = -1; j > -10; j--) {
            expect(i+j).not.toBe(0);
        }
    }
});

//Truthiness
test('null', () => {
    const n = null
    expect(n).toBeNull(); // true
    expect(n).toBeDefined(); // true
    //expect(n).toBeUndefined(); // false
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy(); // Falsy values: undefined, null, Nan, 0, "", false
})

//Numbers   (toBe and toEqual are equivalent for numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toEqual(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(8);
    const value2 = 0.2 + 0.1
    expect(value2).toBeCloseTo(0.3); // toBeCloseTo is for floating numbers. toBe or toEqual don't work because of the rounding error.
    expect(value2).not.toBe(0.3);
})

//String
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('Christoph', () => {
    expect('Christoph').toMatch(/stop/); // there is a stop in CriSTOPh
});

//Arrays and iterables
const shoppingList = ['milk', 'beef', 'cookies', 'chicken'];
test('there is cookies in the shopping list', () => {
    expect(shoppingList).toContain('cookies');
    expect(new Set(shoppingList)).toContain('milk');
})

//Exceptions
function compileAndroidCode(x, y) {
    if (x + x === y){       // == operator does the type conversion of the operands before comparison
        throw new Error('sum is ok')
    }
    else {
        throw new Error('sum is wrong');
    }
}
test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode(4, 8)).toThrow();
    expect(() => compileAndroidCode(4, 8)).toThrow(Error);

    // You can also use the exact error message or a regexp
    //expect(() => compileAndroidCode(5, 8)).toThrow('sum is ok'); //If I change the text, it fails
    expect(() => compileAndroidCode(5, 8)).toThrow(/wrong/);
});


