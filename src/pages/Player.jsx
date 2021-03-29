import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { convertDate } from '../util/converDate';
import Instagram from '../util/Instagram';
import ArrowLeftCircle from '../util/ArrowLeftCircle';

const Player = () => {
	const { player } = useSelector(({ teams }) => teams);

	const img = 'data/players-img/';
	const flag = 'data/countrys/';

	console.log('Player Rendered');

	return (
		<div className='player'>
			<div className='container'>
				<div className='player__row'>
					<div className='player__bio'>
						<div className='player__imgs'>
							<Link className='player__btn' to='/'>
								<ArrowLeftCircle size='24' />
							</Link>
							<img
								className='player__photo'
								src={img + player.photo}
								alt={player.nickname}
							/>
							<img
								className='player__flag'
								src={flag + player.country + '.png'}
								alt={player.country}
							/>
						</div>
						<h1 className='player__nickname'>{player.nickname}</h1>
						<h2 className='player__fullname'>{player.fullName}</h2>
					</div>
					<div className='player__info'>
						<p className='player__story'>{player.story}</p>
						<div className='player__con'>
							<span>Birth: {convertDate(player.age)}</span>
							<span>Team: {player.team}</span>
							{player.instagram ? (
								<a
									target='_blank'
									href={player.instagram}
									rel='noopener noreferrer'>
									<Instagram size='24' />
								</a>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
