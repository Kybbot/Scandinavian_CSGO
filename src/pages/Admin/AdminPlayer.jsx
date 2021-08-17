import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

import { Button } from '../../components';
import Edit from '../../assets/icons/Edit';

const img = 'data/players-img/';

const AdminPlayer = ({ player }) => {
	const { id, nickname, fullName, age, photo, country, team, instagram, story } = player;
	const [edit, setEdit] = React.useState(false);
	const [form, setForm] = React.useState({
		id,
		nickname,
		fullName,
		age,
		photo,
		country,
		team,
		instagram,
		story,
	});

	const editChange = () => {
		setEdit(!edit);
	};

	const handleInputChange = (event) => {
		const { value } = event.target;
		const { name } = event.target;

		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	const formHandler = (event) => {
		event.preventDefault();

		fetch(`/players/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});
	};

	const deleteBtnHandler = (event) => {
		event.preventDefault();
		const question = window.confirm('Delete this team?');

		if (question) {
			fetch(`/players/${id}`, {
				method: 'DELETE',
			});
		}
	};

	return (
		<div className='admin__player'>
			<div className='admin__player-container'>
				<LazyLoad height={40} once offset={20}>
					<img className='admin__img' src={img + (photo || 'blankplayer.svg')} alt={nickname} />
				</LazyLoad>
				<div className='admin__player-nickname'>{nickname}</div>
				<div className='admin__player-name'>{fullName}</div>
				<div className='admin__player-age'>{age}</div>
				<div className='admin__player-country'>{country}</div>
				<div className='admin__player-team'>{team}</div>
				<Button additionalClass='admin__edit' onClick={editChange}>
					<Edit size='18' />
				</Button>
			</div>
			{edit && (
				<form onSubmit={formHandler} className='admin__form'>
					<fieldset className='admin__form-fieldset'>
						<label className='admin__form-label'>
							Player nickname
							<input
								className='admin__form-input'
								value={form.nickname}
								name='nickname'
								type='text'
								placeholder='Nickname'
								pattern='\w+'
								required
								onChange={handleInputChange}
							/>
						</label>
						<label className='admin__form-label'>
							Player name
							<input
								className='admin__form-input'
								value={form.fullName}
								name='fullName'
								type='text'
								placeholder='Name'
								pattern="[A-Z][A-Za-z' -_]+"
								required
								onChange={handleInputChange}
							/>
						</label>
						<label className='admin__form-label'>
							Player{' '}
							<input
								className='admin__form-input'
								value={form.age}
								name='age'
								type='text'
								placeholder='Age'
								pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
								required
								onChange={handleInputChange}
							/>
						</label>
						<label className='admin__form-label'>
							Player country
							<input
								className='admin__form-input'
								value={form.country}
								name='country'
								type='text'
								placeholder='Country'
								pattern="[A-Z][A-Za-z' -_]+"
								required
								onChange={handleInputChange}
							/>
						</label>
						<label className='admin__form-label'>
							Player team
							<input
								className='admin__form-input'
								value={form.team}
								name='team'
								type='text'
								placeholder='Team'
								pattern="[A-Z][A-Za-z' -_]+"
								required
								onChange={handleInputChange}
							/>
						</label>
						<label className='admin__form-label'>
							Player instagram
							<input
								className='admin__form-input'
								value={form.instagram}
								name='instagram'
								type='text'
								placeholder='Instagram nickname'
								pattern='^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$'
								required
								onChange={handleInputChange}
							/>
						</label>
					</fieldset>
					<fieldset className='admin__form-fieldset'>
						<label className='admin__form-label'>
							Player story
							<textarea
								className='admin__form-desc'
								value={form.story}
								name='story'
								required
								onChange={handleInputChange}
							/>
						</label>
					</fieldset>
					<Button type='submit'>Update</Button>
					<Button onClick={deleteBtnHandler} type='button'>
						Delete
					</Button>
				</form>
			)}
		</div>
	);
};

AdminPlayer.propTypes = {
	player: PropTypes.shape({
		id: PropTypes.number,
		nickname: PropTypes.string,
		fullName: PropTypes.string,
		age: PropTypes.string,
		photo: PropTypes.string,
		country: PropTypes.string,
		team: PropTypes.string,
		instagram: PropTypes.string,
		story: PropTypes.string,
	}).isRequired,
};

export default AdminPlayer;
