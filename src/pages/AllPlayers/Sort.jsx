import React from 'react';
import PropTypes from 'prop-types';

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
				<button
					type='button'
					className={`sort__btn ${visiblePopup ? 'sort__btn--rotate' : ''}`}
					onClick={toggleVisiblePopup}
				>
					^
				</button>
			</div>
			{visiblePopup && (
				<div className='sort_popup'>
					<ul>
						{items.map((item) => (
							<li
								key={item.name}
								onClick={() => onSelectItem(item.value)}
								onKeyDown={(event) => keyDown(event, item.value)}
								role='button'
								tabIndex={0}
							>
								{item.name}
							</li>
						))}
					</ul>
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
