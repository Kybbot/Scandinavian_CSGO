export const convertDate = (date) => {
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let age = new Date(date);
	let ageYear = age.getFullYear();
	let ageMonth = age.getMonth();
	let ageDate = age.getDate();
	function birthDateToAge(birthDate) {
		birthDate = new Date(birthDate);
		let now = new Date();
		let age = now.getFullYear() - birthDate.getFullYear();
		return now.setFullYear(0) < birthDate.setFullYear(0) ? age - 1 : age;
	}
	return `${ageDate} ${month[ageMonth]} ${ageYear} (${birthDateToAge(date)} years)`;
};
