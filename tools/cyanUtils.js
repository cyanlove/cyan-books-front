export const toPlainString = str =>
	`${str}`
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[ ]{2,}/g, " ")
		.toLowerCase()
		.trim();

export const matchTwoStrings = (str1, str2) =>
	toPlainString(str1).indexOf(toPlainString(str2)) > -1;
