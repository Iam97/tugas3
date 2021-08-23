const Convert = require("./Convert");

Run|Debug
test('cel to cel', () => {
    const Celcius = new Convert();
    expect(Celcius.fromCelcius(Celcius)).toEqual(Celcius);
});

Run|Debug
test('cel to rea', () => {
    const Celcius = new Convert();
    expect(Celcius.fromCelcius('rea',50)).toBe(40);
});

Run|Debug
test('cel to far', () => {
    const Celcius = new Convert();
    expect(Celcius.fromCelcius('far',10)).toBe(50);
});

Run|Debug
test('rea to rea', () => {
    const Reamur = new Convert();
    expect(Reamur.fromReamur(Reamur)).toEqual(Reamur);
});

Run|Debug
test('rea to cel', () => {
    const Reamur = new Convert();
    expect(Reamur.fromReamur('cel',20)).toBe(25);
});

Run|Debug
test('rea to far', () => {
    const Reamur = new Convert();
    expect(Reamur.fromReamur('far',8)).toBe(50);
});

Run|Debug
test('far to far', () => {
    const Farenheit = new Convert();
    expect(Farenheit.fromFarenheit(Farenheit)).toEqual(Farenheit);
});

Run|Debug
test('far to cel', () => {
    const Farenheit = new Convert();
    expect(Farenheit.fromFarenheit('cel',32)).toBe(0);
});

Run|Debug
test('far to rea', () => {
    const Farenheit = new Convert();
    expect(Farenheit.fromFarenheit('rea',32)).toBe(0);
});