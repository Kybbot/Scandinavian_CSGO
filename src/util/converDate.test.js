import convertDate from './converDate';

describe('convertDate:', () => {
	beforeAll(() => {
		jest.useFakeTimers('modern');
		jest.setSystemTime(new Date('2021-08-26'));
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	test('should return full data and birthday', () => {
		expect(convertDate('1998-01-11')).toBe('11 January 1998 (23 years)');
		expect(convertDate('1991-02-22')).toBe('22 February 1991 (30 years)');
		expect(convertDate('1999-03-07')).toBe('7 March 1999 (22 years)');
		expect(convertDate('1994-04-25')).toBe('25 April 1994 (27 years)');
		expect(convertDate('1993-05-18')).toBe('18 May 1993 (28 years)');
		expect(convertDate('1988-06-10')).toBe('10 June 1988 (33 years)');
		expect(convertDate('1993-07-02')).toBe('2 July 1993 (28 years)');
		expect(convertDate('2003-08-02')).toBe('2 August 2003 (18 years)');
		expect(convertDate('1995-09-08')).toBe('8 September 1995 (25 years)');
		expect(convertDate('1991-10-19')).toBe('19 October 1991 (29 years)');
		expect(convertDate('1998-11-26')).toBe('26 November 1998 (22 years)');
		expect(convertDate('1987-12-02')).toBe('2 December 1987 (33 years)');
	});

	test('should return full data and birthday with only year arg', () => {
		expect(convertDate('1987')).toBe('1 January 1987 (34 years)');
		expect(convertDate('1990')).toBe('1 January 1990 (31 years)');
		expect(convertDate('2002')).toBe('1 January 2002 (19 years)');
	});

	test('should return full data and birthday with only year and mont arg', () => {
		expect(convertDate('1987-02')).toBe('1 February 1987 (34 years)');
		expect(convertDate('1990-08')).toBe('1 August 1990 (31 years)');
		expect(convertDate('2002-09')).toBe('1 September 2002 (18 years)');
	});
});
