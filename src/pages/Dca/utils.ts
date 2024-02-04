export function removeLeadingZeros(number: string) {
	const numberString = number.toString().replace(/^0+(?=\d)/, "");

	const result = parseFloat(numberString);

	console.log(result);

	return result;
}

export function formatNumberWithCommas(number: number, override?: object) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "AUD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		...override,
	}).format(number);
}
