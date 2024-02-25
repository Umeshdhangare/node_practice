function add(numbers) {
	return numbers
		.split(",")
		.map((x) => parseInt(x))
		.reduce((a, b) => a + b);
}

module.exports = add;
