import React from 'react';

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

	return (
		<div className='sort'>
			<div className='sort__label'>
				{name}
				<button className={'sort__btn ' + (visiblePopup ? 'sort__btn--rotate' : '')} onClick={toggleVisiblePopup}>
					^
				</button>
			</div>
			{visiblePopup && (
				<div className='sort_popup'>
					<ul>
						{items.map((item) => (
							<li key={item.name} onClick={() => onSelectItem(item.value)}>
								{item.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
});

export default Sort;
