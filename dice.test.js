const { expect } = require("@jest/globals");
const rollDice = require("./dice");

describe("#rollDice", () => {
	test("It rolls the correct amount of dice", () => {
		Math.random = jest.fn(() => 0.5);
		expect(rollDice(6)).toEqual(3);
		expect(rollDice(2)).toEqual(1);
		expect(rollDice(10)).toBe(5);
		expect(Math.random.mock.calls.length).toBe(2);
	});
});
