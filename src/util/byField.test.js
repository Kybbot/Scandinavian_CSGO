import byField from './byField';

describe('byField:', () => {
	const arr = [
		{
			id: 1,
			nickname: 'KRIMZ',
			country: 'Sweden',
			team: 'Fnatic',
		},
		{
			id: 18,
			nickname: 'allu',
			country: 'Finland',
			team: 'ENCE',
		},
		{
			id: 29,
			nickname: 'hallzerk',
			country: 'Norway',
			team: 'Dignitas',
		},
		{
			id: 30,
			nickname: 'cajunb',
			country: 'Denmark',
			team: 'North',
		},
	];

	const sortedCountryByAsc = [
		{
			id: 30,
			nickname: 'cajunb',
			country: 'Denmark',
			team: 'North',
		},
		{
			id: 18,
			nickname: 'allu',
			country: 'Finland',
			team: 'ENCE',
		},
		{
			id: 29,
			nickname: 'hallzerk',
			country: 'Norway',
			team: 'Dignitas',
		},
		{
			id: 1,
			nickname: 'KRIMZ',
			country: 'Sweden',
			team: 'Fnatic',
		},
	];

	const sortedCountryByDesc = [
		{
			id: 1,
			nickname: 'KRIMZ',
			country: 'Sweden',
			team: 'Fnatic',
		},
		{
			id: 29,
			nickname: 'hallzerk',
			country: 'Norway',
			team: 'Dignitas',
		},
		{
			id: 18,
			nickname: 'allu',
			country: 'Finland',
			team: 'ENCE',
		},
		{
			id: 30,
			nickname: 'cajunb',
			country: 'Denmark',
			team: 'North',
		},
	];

	const sortedTeamsByAsc = [
		{
			id: 29,
			nickname: 'hallzerk',
			country: 'Norway',
			team: 'Dignitas',
		},
		{
			id: 18,
			nickname: 'allu',
			country: 'Finland',
			team: 'ENCE',
		},
		{
			id: 1,
			nickname: 'KRIMZ',
			country: 'Sweden',
			team: 'Fnatic',
		},
		{
			id: 30,
			nickname: 'cajunb',
			country: 'Denmark',
			team: 'North',
		},
	];

	const sortedTeamsByDesc = [
		{
			id: 30,
			nickname: 'cajunb',
			country: 'Denmark',
			team: 'North',
		},
		{
			id: 1,
			nickname: 'KRIMZ',
			country: 'Sweden',
			team: 'Fnatic',
		},
		{
			id: 18,
			nickname: 'allu',
			country: 'Finland',
			team: 'ENCE',
		},
		{
			id: 29,
			nickname: 'hallzerk',
			country: 'Norway',
			team: 'Dignitas',
		},
	];

	it('should sort arr with objs by asc', () => {
		expect(arr.sort(byField('country', false, false))).toEqual(sortedCountryByAsc);
		expect(arr.sort(byField('team', false, false))).toEqual(sortedTeamsByAsc);
	});

	it('should sort arr with objs by desc', () => {
		expect(arr.sort(byField('country', true, false))).toEqual(sortedCountryByDesc);
		expect(arr.sort(byField('team', true, false))).toEqual(sortedTeamsByDesc);
	});
});
