import React from 'react';
import LazyLoad from 'react-lazyload';

import Edit from '../util/Edit';

const img = 'data/players-img/';

const AdminPlayer = ({
	id,
	nickname,
	fullName,
	age,
	photo,
	country,
	team,
	instagram,
	story,
}) => {
	const [edit, setEdit] = React.useState(false);
	const [form, setForm] = React.useState({
		id: id,
		nickname: nickname,
		fullName: fullName,
		age: age,
		photo: photo,
		country: country,
		team: team,
		instagram: instagram,
		story: story,
	});

	const editChange = () => {
		setEdit(!edit);
	};

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

		fetch(`/players/${id}`, {
			method: 'PUT',
			body: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	return (
		<div className='admin-player'>
			<div className='admin-player__container'>
				<LazyLoad height={40} once offset={20}>
					<img className='admin-player__img' src={img + photo} alt={nickname} />
				</LazyLoad>
				<div className='admin-player__nickname'>{nickname}</div>
				<div className='admin-player__name'>{fullName}</div>
				<div className='admin-player__age'>{age}</div>
				<div className='admin-player__country'>{country}</div>
				<div className='admin-player__team'>{team}</div>
				<button className='admin-player__edit' onClick={editChange}>
					<Edit size={18} />
				</button>
			</div>
			{edit && (
				<form onSubmit={formHandler} className='admin-form'>
					<fieldset className='admin-form__fieldset'>
						<input
							className='admin-form__input'
							value={form.nickname}
							name='nickname'
							type='text'
							placeholder='Nickname'
							onChange={handleInputChange}
						/>
						<input
							className='admin-form__input'
							value={form.fullName}
							name='name'
							type='text'
							placeholder='Nmae'
							onChange={handleInputChange}
						/>
						<input
							className='admin-form__input'
							value={form.age}
							name='age'
							type='text'
							placeholder='Age'
							onChange={handleInputChange}
						/>
					</fieldset>
					<fieldset className='admin-form__fieldset'>
						<input
							className='admin-form__input'
							value={form.country}
							name='country'
							type='text'
							placeholder='Country'
							onChange={handleInputChange}
						/>
						<input
							className='admin-form__input'
							value={form.team}
							name='team'
							type='text'
							placeholder='Team'
							onChange={handleInputChange}
						/>
						<input
							className='admin-form__input'
							value={form.instagram}
							name='instagram'
							type='text'
							placeholder='Instagram'
							onChange={handleInputChange}
						/>
					</fieldset>
					<textarea
						className='admin-form__desc'
						value={form.story}
						name='story'
						onChange={handleInputChange}></textarea>
					<button className='btn' type='submit'>
						Update
					</button>
				</form>
			)}
		</div>
	);
};

export default AdminPlayer;
