import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../components';

const AddNewPlayer = () => {
	const [form, setForm] = React.useState({
		id: uuidv4(),
		nickname: '',
		fullName: '',
		age: '',
		photo: '',
		country: '',
		team: '',
		instagram: '',
		story: '',
	});

	const handleInputChange = (event) => {
		const { value, name } = event.target;

		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	const formHandler = (event) => {
		event.preventDefault();

		fetch(`/players/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});
	};

	return (
		<form onSubmit={formHandler} className='admin-form'>
			<fieldset className='admin-form__fieldset'>
				<label htmlFor='playerNickname' className='admin-form__label'>
					Player nickname
					<input
						id='playerNickname'
						className='admin-form__input'
						value={form.nickname}
						name='nickname'
						type='text'
						placeholder='Nickname'
						pattern='\w+'
						required
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor='playerName' className='admin-form__label'>
					Player name
					<input
						id='playerName'
						className='admin-form__input'
						value={form.fullName}
						name='fullName'
						type='text'
						placeholder='Name'
						pattern="[A-Z][A-Za-z' -_]+"
						required
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor='playerAge' className='admin-form__label'>
					Player age
					<input
						id='playerAge'
						className='admin-form__input'
						value={form.age}
						name='age'
						type='text'
						placeholder='Age (yyyy-mm-dd)'
						pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
						required
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor='playerCountry' className='admin-form__label'>
					Player country
					<input
						id='playerCountry'
						className='admin-form__input'
						value={form.country}
						name='country'
						type='text'
						placeholder='Country'
						pattern="[A-Z][A-Za-z' -_]+"
						required
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor='playerTeam' className='admin-form__label'>
					Player team
					<input
						id='playerTeam'
						className='admin-form__input'
						value={form.team}
						name='team'
						type='text'
						placeholder='Team'
						pattern="[A-Z][A-Za-z' -_]+"
						required
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor='playerInst' className='admin-form__label'>
					Player instagram
					<input
						id='playerInst'
						className='admin-form__input'
						value={form.instagram}
						name='instagram'
						type='text'
						placeholder='Instagram nickname'
						pattern='^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$'
						onChange={handleInputChange}
					/>
				</label>
				<label htmlFor='playerPhoto' className='admin-form__label'>
					Player photo name
					<input
						id='playerPhoto'
						className='admin-form__input'
						value={form.photo}
						name='photo'
						type='text'
						placeholder='player.webp'
						pattern='.*\.(jpe?g|png|webp)$'
						onChange={handleInputChange}
					/>
				</label>
			</fieldset>
			<fieldset className='admin-form__fieldset'>
				<label htmlFor='playerStory' className='admin-form__label'>
					Player story
					<textarea
						id='playerStory'
						className='admin-form__desc'
						value={form.story}
						name='story'
						placeholder='Player story...'
						required
						onChange={handleInputChange}
					/>
				</label>
			</fieldset>
			<Button type='submit'>Add new player</Button>
		</form>
	);
};

export default AddNewPlayer;
