import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftCircle = ({ size = '24', color = '#000000' }) => (
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
		<circle cx='12' cy='12' r='10' />
		<path d='M12 8l-4 4 4 4M16 12H9' />
	</svg>
);

ArrowLeftCircle.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
};

ArrowLeftCircle.defaultProps = {
	size: '24',
	color: '#000000',
};

export default ArrowLeftCircle;
