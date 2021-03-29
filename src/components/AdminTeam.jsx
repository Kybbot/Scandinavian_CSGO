import React from 'react';

import Edit from '../util/Edit';

const img = 'data/teams-img/';

const AdminTeam = ({
	id,
	name,
	country,
	based,
	webSite,
	logo,
	members: { currentMembers, pastMembers },
}) => {
	const [edit, setEdit] = React.useState(false);
	const [form, setForm] = React.useState({
		id: id,
		name: name,
		country: country,
		based: based,
		webSite: webSite,
		logo: logo,
		members: {
			currentMembers: currentMembers,
			pastMembers: pastMembers,
		},
	});
	const [textarea, setTextarea] = React.useState({
		currentMembers: currentMembers,
		pastMembers: pastMembers,
	});

	React.useEffect(() => {
		setForm((state) => ({
			...state,
			members: textarea,
		}));
	}, [textarea]);

	const editChange = () => {
		setEdit(!edit);
	};

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

		fetch(`/teams/${id}`, {
			method: 'PUT',
			body: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	console.log('AdminTeam Redered');

	return (
		<div className='admin-team'>
			<div className='admin-team__container'>
				<img className='admin-team__img' src={img + logo} alt={name} />
				<div className='admin-team__name'>{name}</div>
				<div className='admin-team__country'>{country}</div>
				<div className='admin-team__based'>{based}</div>
				<div className='admin-team__webSite'>{webSite}</div>
				<button className='admin-team__edit' onClick={editChange}>
					<Edit size={18} />
				</button>
			</div>
			{edit && (
				<form onSubmit={formHandler} className='admin-form'>
					<fieldset className='admin-form__fieldset'>
						<input
							className='admin-form__input'
							value={form.name}
							name='name'
							type='text'
							placeholder='Name'
							onChange={handleInputChange}
						/>
						<input
							className='admin-form__input'
							value={form.country}
							name='country'
							type='text'
							placeholder='Country'
							onChange={handleInputChange}
						/>
					</fieldset>
					<fieldset className='admin-form__fieldset'>
						<input
							className='admin-form__input'
							value={form.based}
							name='based'
							type='text'
							placeholder='Based'
							onChange={handleInputChange}
						/>
						<input
							className='admin-form__input'
							value={form.webSite}
							name='webSite'
							type='text'
							placeholder='WebSite'
							onChange={handleInputChange}
						/>
					</fieldset>
					<textarea
						value={textarea.currentMembers}
						name='currentMembers'
						className='admin-form__desc--little'
						onChange={handleTextareaChange}></textarea>
					<textarea
						value={textarea.pastMembers}
						name='pastMembers'
						className='admin-form__desc--little'
						onChange={handleTextareaChange}></textarea>
					<button className='btn' type='submit'>
						Update
					</button>
				</form>
			)}
		</div>
	);
};

export default AdminTeam;
