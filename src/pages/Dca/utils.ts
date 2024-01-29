export function removeLeadingZeros(number: string) {
	const numberString = number.toString().replace(/^0+(?=\d)/, "");

	const result = parseFloat(numberString);

	console.log(result);

	return result;
}
