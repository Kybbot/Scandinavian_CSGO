import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components';

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
			await signup(emailRef.current.value, passwordRef.current.value).then((crud) => {
				crud.user.sendEmailVerification().then(() => {
					alert('Check your Email for verification');
				});
			});
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
				<form className='admin-form' onSubmit={handleSubmit}>
					<label className='admin-form__label'>
						Email <input className='admin-form__input' type='email' ref={emailRef} required />
					</label>
					<label className='admin-form__label'>
						Password <input className='admin-form__input' type='password' ref={passwordRef} required />
					</label>
					<label className='admin-form__label'>
						Password <input className='admin-form__input' type='password' ref={passwordConfirmRef} required />
					</label>
					<Button type='submit' disabled={loading}>
						Sign Up
					</Button>
				</form>
				<p className='text-center'>
					Already have an account? <Link to='/login'>Log in</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
