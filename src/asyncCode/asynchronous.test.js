/*-asynchronous code: function can run parallel, rather than having to wait for each function to finish.
-A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved.
A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
-Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always.
And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.
-A JavaScript callback is a function which is to be executed after another function has finished execution.


*/

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 2000);
    });
}

function fetchDataCallBack(callback) {
    const word = 'peanut butter';
    callback(null, word)
}

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});


test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

/*test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});
*/

test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchDataCallBack(callback);
});
