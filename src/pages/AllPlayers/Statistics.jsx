import React from 'react';
import PropTypes from 'prop-types';

const Statistics = React.memo(({ items }) => {
	const flag = 'data/countrys/';
	const statistics = [];

	for (let key in items) {
		statistics.push(
			<div className='statistics__item' key={key} style={{ backgroundImage: `url(${flag + key + '-map.webp'})` }}>
				<img src={flag + key + '.png'} alt={key} className='statistics__img' />
				<div className='statistics__container'>
					<div className='statistics__country'>{key}</div>
					<div className='statistics__number'>{items[key]} players</div>
				</div>
			</div>
		);
	}
	return <div className='statistics'>{statistics}</div>;
});

Statistics.propTypes = {
	items: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;
