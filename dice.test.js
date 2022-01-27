const rollDice = require("./dice");

describe("#rollDice", () => {
	test("It rolls the correct amount of dice", () => {
		Math.random = jest.fn(() => 0.5);
		expect(rollDice(6).toEqual(3));
		expect(rollDice(2).toEqual(1));
	});
});
