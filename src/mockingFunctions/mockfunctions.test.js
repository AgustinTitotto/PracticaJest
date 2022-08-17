//Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code,
//rather than only testing the output.
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('Testing mock functions', () => {

    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});

//To inject test values into your code during a test
const myMock = jest.fn();
console.log(myMock());
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
console.log(myMock(), myMock(), myMock(), myMock());


const myMockFn = jest.fn(cb => cb(null, true));
myMockFn((err, val) => console.log(err));

const myMockFn2 = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

console.log(myMockFn2(), myMockFn2(), myMockFn2(), myMockFn2());