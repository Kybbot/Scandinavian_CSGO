import React from 'react';
import PropTypes from 'prop-types';

import { RotateButton } from '../../components';

const Sort = React.memo(({ items, name, onClickSort }) => {
	const [visiblePopup, setVisiblePopup] = React.useState(false);

	const toggleVisiblePopup = (event) => {
		event.preventDefault();
		setVisiblePopup(!visiblePopup);
	};

	const onSelectItem = (type) => {
		onClickSort(type);
		setVisiblePopup(!visiblePopup);
	};

	const keyDown = (event, type) => {
		if (event.key === 'Enter') {
			onClickSort(type);
			setVisiblePopup(!visiblePopup);
		}
	};

	return (
		<div className='sort'>
			<div className='sort__label'>
				{name}
				<RotateButton
					additionalClass={`${visiblePopup ? 'rotate-btn--rotate' : ''}`}
					type='button'
					onClick={toggleVisiblePopup}
				/>
			</div>
			{visiblePopup && (
				<div className='sort_popup'>
					{items.map((item) => (
						<div
							className='sort_popup__item'
							key={item.name}
							onClick={() => onSelectItem(item.value)}
							onKeyDown={(event) => keyDown(event, item.value)}
							role='button'
							tabIndex={0}
						>
							{item.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
});

Sort.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.string,
		})
	).isRequired,
	name: PropTypes.string.isRequired,
	onClickSort: PropTypes.func.isRequired,
};

export default Sort;
