export const byField = function (field, reverse, primer) {
	let key = primer
		? function (x) {
				return primer(x[field]);
		  }
		: function (x) {
				return x[field];
		  };

	reverse = !reverse ? 1 : -1;

	return function (a, b) {
		a = key(a);
		b = key(b);
		return reverse * ((a > b) - (b > a));
	};
};
