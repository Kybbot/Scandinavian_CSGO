import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components';
import Edit from '../../assets/icons/Edit';

const img = 'data/teams-img/';

const AdminTeam = ({ team }) => {
	const {
		id,
		name,
		country,
		based,
		webSite,
		logo,
		members: { currentMembers, pastMembers },
	} = team;
	const [edit, setEdit] = React.useState(false);
	const [form, setForm] = React.useState({
		id,
		name,
		country,
		based,
		webSite,
		logo,
		members: {
			currentMembers,
			pastMembers,
		},
	});
	const [textarea, setTextarea] = React.useState({
		currentMembers,
		pastMembers,
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

		fetch(`/teams/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		}).then((response) => console.log(response));
	};

	const deleteBtnHandler = (event) => {
		event.preventDefault();
		const question = window.confirm('Delete this team?');

		if (question) {
			fetch(`/teams/${id}`, {
				method: 'DELETE',
			});
		}
	};

	return (
		<div className='admin-team'>
			<div className='admin-team__container'>
				<img className='admin-team__img' src={img + logo} alt={name} />
				<div className='admin-team__name'>{name}</div>
				<div className='admin-team__country'>{country}</div>
				<div className='admin-team__based'>{based}</div>
				<div className='admin-team__webSite' title={webSite}>
					{webSite}
				</div>
				<Button additionalClass='admin__edit' onClick={editChange}>
					<Edit size='18' />
				</Button>
			</div>
			{edit && (
				<form onSubmit={formHandler} className='admin-form'>
					<fieldset className='admin-form__fieldset'>
						<label className='admin-form__label'>
							Name of team
							<input
								className='admin-form__input'
								value={form.name}
								name='name'
								type='text'
								placeholder='Name'
								pattern="[A-Z][A-Za-z' -_]+"
								required
								onChange={handleInputChange}
							/>
						</label>
						<label className='admin-form__label'>
							Name of country
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
						</label>
						<label className='admin-form__label'>
							Year of based
							<input
								className='admin-form__input'
								value={form.based}
								name='based'
								type='text'
								placeholder='Based'
								pattern='\d+'
								required
								onChange={handleInputChange}
							/>
						</label>
						<label className='admin-form__label'>
							Link to webSite
							<input
								className='admin-form__input'
								value={form.webSite}
								name='webSite'
								type='text'
								placeholder='WebSite'
								pattern='^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'
								required
								onChange={handleInputChange}
							/>
						</label>
					</fieldset>
					<fieldset className='admin-form__fieldset'>
						<label className='admin-form__label'>
							Names of current members
							<textarea
								value={textarea.currentMembers}
								name='currentMembers'
								className='admin-form__desc admin-form__desc--full'
								required
								onChange={handleTextareaChange}
							/>
						</label>
						<label className='admin-form__label'>
							Names of past members
							<textarea
								value={textarea.pastMembers}
								name='pastMembers'
								className='admin-form__desc admin-form__desc--full'
								required
								onChange={handleTextareaChange}
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

AdminTeam.propTypes = {
	team: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		country: PropTypes.string,
		based: PropTypes.number,
		webSite: PropTypes.string,
		logo: PropTypes.string,
		members: PropTypes.shape({
			currentMembers: PropTypes.arrayOf(PropTypes.string),
			pastMembers: PropTypes.arrayOf(PropTypes.string),
		}),
	}).isRequired,
};

export default AdminTeam;
