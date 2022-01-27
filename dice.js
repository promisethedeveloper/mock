function rollDice(numSides) {
	return Math.floor(Math.random(12) * numSides);
}

module.exports = rollDice;
