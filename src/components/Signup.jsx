import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
	const { signup } = useAuth();

	const emailRef = React.useRef();
	const passwordRef = React.useRef();
	const passwordConfirmRef = React.useRef();

	const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState(false);

	const history = useHistory();
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Password do not match');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value).then(
				(crud) => {
					crud.user.sendEmailVerification().then(() => {
						alert('Check your Email for verification');
					});
				}
			);
			setLoading(false);
			history.push('/admin/login');
		} catch {
			setLoading(false);
			setError('Failed to create an account');
		}
	};

	return (
		<div className='container'>
			<div className='admin-form__signup'>
				<h2 className='text-center'>Sign Up</h2>
				{error && <div>{error}</div>}
				<form className='admin-form admin-form--column' onSubmit={handleSubmit}>
					<fieldset className='admin-form__fieldset w-100' id='email'>
						<label className='admin-form__label'>Email</label>
						<input
							className='admin-form__input'
							type='email'
							ref={emailRef}
							required
						/>
					</fieldset>
					<fieldset className='admin-form__fieldset w-100' id='password'>
						<label className='admin-form__label'>Password</label>
						<input
							className='admin-form__input'
							type='password'
							ref={passwordRef}
							required
						/>
					</fieldset>
					<fieldset
						className='admin-form__fieldset w-100'
						id='password-confirm'>
						<label className='admin-form__label'>Password</label>
						<input
							className='admin-form__input'
							type='password'
							ref={passwordConfirmRef}
							required
						/>
					</fieldset>
					<button disabled={loading} className='btn w-100' type='submit'>
						Sign Up
					</button>
				</form>
				<div className='text-center'>
					Already have an account? <Link to='/admin/login'>Log in</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
