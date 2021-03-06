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
								src={img + (player.photo ? player.photo : 'blankplayer.svg')}
								alt={player.nickname}
							/>
							<img
								className='player__flag'
								src={flag + player.country + '.png'}
								alt={player.country}
							/>
						</div>
						<h2 className='player__nickname'>{player.nickname}</h2>
						<h3 className='player__fullname'>{player.fullName}</h3>
					</div>
					<div className='player__info'>
						<p className='player__story'>{player.story}</p>
						<div className='player__con'>
							<span>Birth: {convertDate(player.age)}</span>
							<span>Team: {player.team}</span>
							{player.instagram ? (
								<a
									target='_blank'
									href={`https://www.instagram.com/${player.instagram}`}
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
