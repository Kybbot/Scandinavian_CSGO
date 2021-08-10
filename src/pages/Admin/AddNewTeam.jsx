import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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

	React.useEffect(() => {
		setForm((state) => ({
			...state,
			members: textarea,
		}));
	}, [textarea]);

	const handleInputChange = (event) => {
		const { name } = event.target;
		const { value } = event.target;

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
		<form className='admin-form' onSubmit={formHandler}>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label' htmlFor='teamName'>
					Name of Team
				</label>
				<input
					id='teamName'
					className='admin-form__input'
					name='name'
					type='text'
					placeholder='Name'
					value={form.name}
					pattern="[A-Z][A-Za-z' -_]+"
					required
					onChange={handleInputChange}
				/>
				<label className='admin-form__label' htmlFor='teamCountry'>
					Name of Country
				</label>
				<input
					id='teamCountry'
					className='admin-form__input'
					name='country'
					type='text'
					placeholder='Country'
					value={form.country}
					pattern="[A-Z][A-Za-z' -_]+"
					required
					onChange={handleInputChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label' htmlFor='teamBased'>
					Year of based
				</label>
				<input
					id='teamBased'
					className='admin-form__input'
					name='based'
					type='number'
					placeholder='Based'
					value={form.based}
					pattern='\d+'
					required
					onChange={handleInputChange}
				/>
				<label className='admin-form__label' htmlFor='teamWebSite'>
					Link to webSite
				</label>
				<input
					id='teamWebSite'
					className='admin-form__input'
					name='webSite'
					type='url'
					placeholder='WebSite'
					value={form.webSite}
					pattern='^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'
					required
					onChange={handleInputChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label' htmlFor='teamLogo'>
					Name of logo
				</label>
				<input
					id='teamLogo'
					className='admin-form__input'
					name='logo'
					type='text'
					placeholder='team.png'
					value={form.logo}
					pattern='.*\.(jpe?g|png)$'
					required
					onChange={handleInputChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset admin-form__fieldset--full'>
				<label className='admin-form__label' htmlFor='teamCurrentMembers'>
					Names of current members
				</label>
				<textarea
					id='teamCurrentMembers'
					name='currentMembers'
					className='admin-form__desc admin-form__desc--full'
					placeholder='Current Members. Example: hampus,REZ,Plopski,twist,nawwk'
					value={form.currentMembers}
					required
					onChange={handleTextareaChange}
				/>
			</fieldset>
			<fieldset className='admin-form__fieldset admin-form__fieldset--full'>
				<label className='admin-form__label' htmlFor='teamPastMembers'>
					Names of past members
				</label>
				<textarea
					id='teamPastMembers'
					name='pastMembers'
					className='admin-form__desc admin-form__desc--full'
					placeholder='Past Members. Example: hampus,REZ,Plopski,twist,nawwk'
					value={form.pastMembers}
					required
					onChange={handleTextareaChange}
				/>
			</fieldset>
			<button className='btn' type='submit'>
				Add new team
			</button>
		</form>
	);
};

export default AddNewTeam;
