import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, additionalClass, ...props }) => (
	<button {...props} className={`btn ${additionalClass ? additionalClass : ''}`}>
		{children}
	</button>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	additionalClass: PropTypes.string,
};

export default Button;
