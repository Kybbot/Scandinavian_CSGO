const convertDate = (date) => {
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

	const age = new Date(date);
	const ageYear = age.getFullYear();
	const ageMonth = age.getMonth();
	const ageDate = age.getDate();

	function birthDateToAge(birthDate) {
		birthDate = new Date(birthDate);
		const now = new Date();
		const currentAge = now.getFullYear() - birthDate.getFullYear();

		return now.setFullYear(0) < birthDate.setFullYear(0) ? currentAge - 1 : currentAge;
	}

	return `${ageDate} ${month[ageMonth]} ${ageYear} (${birthDateToAge(date)} years)`;
};

export default convertDate;
