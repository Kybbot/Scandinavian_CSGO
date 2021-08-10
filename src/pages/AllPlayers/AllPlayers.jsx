import React from 'react';
import LazyLoad from 'react-lazyload';
import { useSelector, useDispatch } from 'react-redux';

import { countPlayers, sortTeams, sortCountrys } from '../../redux/reducers/teamsSlice';
import { getPlayers, getCountedPlayers } from '../../redux/selectors';
import Sort from './Sort';
import Statistics from './Statistics';

const sortItems = [
	{ name: 'A-Z', value: 'asc' },
	{ name: 'Z-A', value: 'desc' },
];

const AllPlayers = () => {
	const img = 'data/players-img/';

	const dispatch = useDispatch();

	const players = useSelector(getPlayers);
	const countedPlayers = useSelector(getCountedPlayers);

	React.useEffect(() => {
		if (!Object.keys(countedPlayers).length) {
			dispatch(countPlayers());
		}
	});

	const countrysSelectChange = React.useCallback(
		(type) => {
			dispatch(sortCountrys(type));
		},
		[dispatch]
	);

	const teamsSelectChange = React.useCallback(
		(type) => {
			dispatch(sortTeams(type));
		},
		[dispatch]
	);

	return (
		<div className='all-players'>
			<div className='container'>
				<div className='all-players__container'>
					<form className='all-players__form'>
						<Sort items={sortItems} name='Sort Countrys' onClickSort={countrysSelectChange} />
						<Sort items={sortItems} name='Sort Teams' onClickSort={teamsSelectChange} />
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
				{players.length &&
					players.map(({ id, photo, nickname, fullName, age, country, team }) => (
						<div className='all-players__player' key={id}>
							<LazyLoad height={40} once offset={20}>
								<img className='all-players__img' src={img + (photo || 'blankplayer.svg')} alt={nickname} />
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
