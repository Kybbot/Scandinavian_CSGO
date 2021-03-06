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
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});
	};

	const deleteBtnHandler = (event) => {
		event.preventDefault();
		let question = window.confirm('Delete this team?');

		if (question) {
			fetch(`/players/${id}`, {
				method: 'DELETE',
			});
		} else {
			return;
		}
	};

	return (
		<div className='admin-player'>
			<div className='admin-player__container'>
				<LazyLoad height={40} once offset={20}>
					<img
						className='admin-player__img'
						src={img + (photo ? photo : 'blankplayer.svg')}
						alt={nickname}
					/>
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
					<fieldset className='admin-form__fieldset admin-form__fieldset--full'>
						<label className='admin-form__label'>Player story</label>
						<textarea
							className='admin-form__desc admin-form__desc--full'
							value={form.story}
							name='story'
							required
							onChange={handleInputChange}></textarea>
					</fieldset>
					<button className='btn' type='submit'>
						Update
					</button>
					<button onClick={deleteBtnHandler} className='btn' type='button'>
						Delete
					</button>
				</form>
			)}
		</div>
	);
};

export default AdminPlayer;
