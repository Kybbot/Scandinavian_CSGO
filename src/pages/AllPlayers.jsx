import React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector, useDispatch } from 'react-redux';

import { Sort, Statistics } from '../components';
import {
	fetchPlayers,
	sortCountrys,
	sortTeams,
} from '../redux/actions/allPlayers';

const img = 'data/players-img/';

const sortItems = [
	{ name: 'A-Z', value: 'asc' },
	{ name: 'Z-A', value: 'desc' },
];

const AllPlayers = () => {
	const dispatch = useDispatch();

	const { items, countedPlayers } = useSelector(({ allPlayers }) => allPlayers);

	React.useEffect(() => {
		if (!items.length) {
			dispatch(fetchPlayers());
		}
	}, []);

	const countrysSelectChange = React.useCallback((type) => {
		dispatch(sortCountrys(type));
	}, []);

	const teamsSelectChange = React.useCallback((type) => {
		dispatch(sortTeams(type));
	}, []);

	return (
		<div className='all-players'>
			<div className='container'>
				<div className='all-players__container'>
					<form className='all-players__form'>
						<Sort
							items={sortItems}
							name='Sort Countrys'
							onClickSort={countrysSelectChange}
						/>
						<Sort
							items={sortItems}
							name='Sort Teams'
							onClickSort={teamsSelectChange}
						/>
					</form>
					<Statistics items={countedPlayers} />
				</div>
				<div className='all-players__info'>
					<div>#</div>
					<div>Nickname</div>
					<div>Name</div>
					<div>Age</div>
					<div>Country</div>
					<div>Team</div>
				</div>
				{items.length &&
					items.map(({ id, photo, nickname, fullName, age, country, team }) => (
						<div className='all-players__player' key={id}>
							<LazyLoad height={40} once offset={20}>
								<img
									className='all-players__img'
									src={img + (photo ? photo : 'blankplayer.svg')}
									alt={nickname}
								/>
							</LazyLoad>
							<div className='all-players__nickname'>{nickname}</div>
							<div className='all-players__name'>{fullName}</div>
							<div className='all-players__age'>{age}</div>
							<div className='all-players__country'>{country}</div>
							<div className='all-players__team'>{team}</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default AllPlayers;
