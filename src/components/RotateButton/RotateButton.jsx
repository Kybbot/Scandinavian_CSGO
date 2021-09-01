import React from 'react';
import PropTypes from 'prop-types';
import ChevronUp from '../../assets/icons/ChevronUp';

const RotateButton = ({ additionalClass, ...props }) => (
	<button {...props} className={`rotate-btn ${additionalClass ? additionalClass : ''}`}>
		<ChevronUp size='18' />
	</button>
);

RotateButton.propTypes = {
	additionalClass: PropTypes.string,
};

RotateButton.defaultProps = {
	additionalClass: '',
};

export default RotateButton;
