import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = ({ size = '24', color = '#000000' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M18 15l-6-6-6 6' />
	</svg>
);

ChevronUp.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
};

ChevronUp.defaultProps = {
	size: '24',
	color: '#000000',
};

export default ChevronUp;
