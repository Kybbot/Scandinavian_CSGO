import React from 'react';
import PropTypes from 'prop-types';

const Edit = ({ size = '24', color = '#000000' }) => (
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
		<path d='M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34' />
		<polygon points='18 2 22 6 12 16 8 16 8 12 18 2' />
	</svg>
);

Edit.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
};

Edit.defaultProps = {
	size: '24',
	color: '#000000',
};

export default Edit;
