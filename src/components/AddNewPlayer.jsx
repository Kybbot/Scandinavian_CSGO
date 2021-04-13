import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
		const value = event.target.value;
		const name = event.target.name;

		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	const formHandler = (event) => {
		event.preventDefault();

		fetch(`/players/`, {
			method: 'POST',
			body: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	console.log('AddNewPlayer Rendered');
	return (
		<form onSubmit={formHandler} className='admin-form'>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label'>Player nickname</label>
				<input
					className='admin-form__input'
					value={form.nickname}
					name='nickname'
					type='text'
					placeholder='Nickname'
					pattern='\w+'
					required
					onChange={handleInputChange}
				/>
				<label className='admin-form__label'>Player name</label>
				<input
					className='admin-form__input'
					value={form.fullName}
					name='fullName'
					type='text'
					placeholder='Name'
					pattern="[A-Z][A-Za-z' -_]+"
					required
					onChange={handleInputChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label'>Player age</label>
				<input
					className='admin-form__input'
					value={form.age}
					name='age'
					type='text'
					placeholder='Age'
					pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
					required
					onChange={handleInputChange}
				/>
				<label className='admin-form__label'>Player country</label>
				<input
					className='admin-form__input'
					value={form.country}
					name='country'
					type='text'
					placeholder='Country'
					pattern="[A-Z][A-Za-z' -_]+"
					required
					onChange={handleInputChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label'>Player team</label>
				<input
					className='admin-form__input'
					value={form.team}
					name='team'
					type='text'
					placeholder='Team'
					pattern="[A-Z][A-Za-z' -_]+"
					required
					onChange={handleInputChange}
				/>
				<label className='admin-form__label'>Player instagram</label>
				<input
					className='admin-form__input'
					value={form.instagram}
					name='instagram'
					type='text'
					placeholder='Instagram nickname'
					pattern='^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$'
					required
					onChange={handleInputChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label'>Player photo name</label>
				<input
					className='admin-form__input'
					value={form.photo}
					name='photo'
					type='text'
					placeholder='player.webp'
					pattern='.*\.(jpe?g|png|webp)$'
					required
					onChange={handleInputChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset admin-form__fieldset--full'>
				<label className='admin-form__label'>Player story</label>
				<textarea
					className='admin-form__desc admin-form__desc--full'
					value={form.story}
					name='story'
					placeholder='Player story...'
					required
					onChange={handleInputChange}></textarea>
			</fieldset>
			<button className='btn' type='submit'>
				Add new player
			</button>
		</form>
	);
};

export default AddNewPlayer;
