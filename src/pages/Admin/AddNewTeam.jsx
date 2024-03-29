import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../components';

const AddNewTeam = () => {
	const [form, setForm] = React.useState({
		id: uuidv4(),
		name: '',
		country: '',
		based: '',
		webSite: '',
		logo: '',
		members: {
			currentMembers: '',
			pastMembers: '',
		},
	});
	const [textarea, setTextarea] = React.useState({
		currentMembers: '',
		pastMembers: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleTextareaChange = (event) => {
		const { name } = event.target;
		const value = event.target.value.split(',');

		setTextarea((state) => ({
			...state,
			[name]: value,
		}));

		setForm((state) => ({
			...state,
			members: textarea,
		}));
	};

	const formHandler = (event) => {
		event.preventDefault();

		fetch(`/teams/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		}).then((response) => console.log(response));
	};

	return (
		<form className='admin__form' onSubmit={formHandler}>
			<fieldset className='admin__form-fieldset'>
				<label className='admin__form-label' htmlFor='teamName'>
					Name of Team
					<input
						id='teamName'
						className='admin__form-input'
						name='name'
						type='text'
						placeholder='Name'
						value={form.name}
						pattern="[A-Z][A-Za-z' -_]+"
						required
						onChange={handleInputChange}
					/>
				</label>
				<label className='admin__form-label' htmlFor='teamCountry'>
					Name of Country
					<input
						id='teamCountry'
						className='admin__form-input'
						name='country'
						type='text'
						placeholder='Country'
						value={form.country}
						pattern="[A-Z][A-Za-z' -_]+"
						required
						onChange={handleInputChange}
					/>
				</label>
				<label className='admin__form-label' htmlFor='teamBased'>
					Year of based
					<input
						id='teamBased'
						className='admin__form-input'
						name='based'
						type='number'
						placeholder='Based'
						value={form.based}
						pattern='\d+'
						required
						onChange={handleInputChange}
					/>
				</label>
				<label className='admin__form-label' htmlFor='teamWebSite'>
					Link to webSite
					<input
						id='teamWebSite'
						className='admin__form-input'
						name='webSite'
						type='url'
						placeholder='WebSite'
						value={form.webSite}
						pattern='^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'
						required
						onChange={handleInputChange}
					/>
				</label>
				<label className='admin__form-label' htmlFor='teamLogo'>
					Name of logo
					<input
						id='teamLogo'
						className='admin__form-input'
						name='logo'
						type='text'
						placeholder='team.png'
						value={form.logo}
						pattern='.*\.(jpe?g|png)$'
						required
						onChange={handleInputChange}
					/>
				</label>
			</fieldset>
			<fieldset className='admin__form-fieldset'>
				<label className='admin__form-label' htmlFor='teamCurrentMembers'>
					Names of current members
					<textarea
						id='teamCurrentMembers'
						name='currentMembers'
						className='admin__form-desc'
						placeholder='Current Members. Example: hampus,REZ,Plopski,twist,nawwk'
						value={form.currentMembers}
						required
						onChange={handleTextareaChange}
					/>
				</label>
				<label className='admin__form-label' htmlFor='teamPastMembers'>
					Names of past members
					<textarea
						id='teamPastMembers'
						name='pastMembers'
						className='admin__form-desc'
						placeholder='Past Members. Example: hampus,REZ,Plopski,twist,nawwk'
						value={form.pastMembers}
						required
						onChange={handleTextareaChange}
					/>
				</label>
			</fieldset>
			<Button type='submit'>Add new team</Button>
		</form>
	);
};

export default AddNewTeam;
