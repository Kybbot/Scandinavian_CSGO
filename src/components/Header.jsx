import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header className='header'>
		<div className='container'>
			<div className='row'>
				<div className='header__logo'>Scandinavian CSGO</div>
				<Link to='/allPlayers'>All Players</Link>
				<div className='header__date'>30.09.2020</div>
			</div>
		</div>
	</header>
);

export default Header;
