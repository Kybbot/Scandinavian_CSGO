import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header className='header'>
		<div className='container'>
			<div className='header__row'>
				<h1 className='header__logo'>Scandinavian CSGO</h1>
				<nav className='header__nav'>
					<Link className='header__link' to='/'>
						Home
					</Link>
					<Link className='header__link' to='/allPlayers'>
						All Players
					</Link>
					<Link className='header__link' to='/admin'>
						Admin
					</Link>
				</nav>
				<div className='header__date'>20.04.2021</div>
			</div>
		</div>
	</header>
);

export default Header;
