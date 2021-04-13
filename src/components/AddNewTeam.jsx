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
		const name = event.target.name;
		const value = event.target.value;

		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleTextareaChange = (event) => {
		const name = event.target.name;
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
			body: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	console.log('AddNewTeam Rendered');
	return (
		<form className='admin-form' onSubmit={formHandler}>
			<fieldset className='admin-form__fieldset'>
				<label className='admin-form__label' htmlFor='name'>
					Name of Team
				</label>
				<input
					id='name'
					className='admin-form__input'
					name='name'
					type='text'
					placeholder='Name'
					value={form.name}
					pattern="[A-Z][A-Za-z' -_]+"
					required
					onChange={handleInputChange}
				/>
				<label className='admin-form__label' htmlFor='country'>
					Name of Country
				</label>
				<input
					id='country'
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
				<label className='admin-form__label' htmlFor='based'>
					Year of based
				</label>
				<input
					id='based'
					className='admin-form__input'
					name='based'
					type='number'
					placeholder='Based'
					value={form.based}
					pattern='\d+'
					required
					onChange={handleInputChange}
				/>
				<label className='admin-form__label' htmlFor='webSite'>
					Link to webSite
				</label>
				<input
					id='webSite'
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
				<label className='admin-form__label' htmlFor='logo'>
					Name of logo
				</label>
				<input
					id='logo'
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
				<label className='admin-form__label' htmlFor='currentMembers'>
					Names of current members
				</label>
				<textarea
					id='currentMembers'
					name='currentMembers'
					className='admin-form__desc admin-form__desc--full'
					placeholder='Current Members. Example: hampus,REZ,Plopski,twist,nawwk'
					value={form.currentMembers}
					required
					onChange={handleTextareaChange}></textarea>
			</fieldset>
			<fieldset className='admin-form__fieldset admin-form__fieldset--full'>
				<label className='admin-form__label' htmlFor='pastMembers'>
					Names of past members
				</label>
				<textarea
					id='pastMembers'
					name='pastMembers'
					className='admin-form__desc admin-form__desc--full'
					placeholder='Past Members. Example: hampus,REZ,Plopski,twist,nawwk'
					value={form.pastMembers}
					required
					onChange={handleTextareaChange}></textarea>
			</fieldset>
			<button className='btn' type='submit'>
				Add new team
			</button>
		</form>
	);
};

export default AddNewTeam;
