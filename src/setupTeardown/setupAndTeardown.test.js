/*beforeEach will run before each test while beforeAll will run only one time before all tests. */

let cities;
let foods;
function initializeCityDatabase(){
    return cities = ['Vienna', 'San Juan', 'Paris'];
}

function clearCityDatabase(){
    return cities = [];
}

function isCity(city){
    let bool = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === city){
            bool = true;
        }
    }
    return bool;
}

function initializeFoodDatabase() {
    return foods = ['Wiener Schnitzel', 'Mofongo', 'Baguette'];
}

function clearFoodDatabase() {
    return foods = [];
}

function isValidCityFoodPair(city, food) {
    let bool = false;
    for (let i = 0; i < foods.length; i++) {
        if (cities.indexOf(city) === foods.indexOf(food)){
            bool = true;
        }
    }
    return bool;
}

/*All of the above methods are just to simple methods to check the different testing methods in jest*/

beforeAll(() => {
    return initializeCityDatabase();
});

afterAll(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    afterEach(() => {
        return clearFoodDatabase();
    })

    test('Vienna <3 veal', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});

/*beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});*/