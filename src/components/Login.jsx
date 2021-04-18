import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
	const { login } = useAuth();

	const emailRef = React.useRef();
	const passwordRef = React.useRef();

	const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState(false);

	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			setLoading(false);
			history.push('/admin');
		} catch {
			setLoading(false);
			setError('Failed to sign in');
		}
	};

	return (
		<div className='container'>
			<div className='admin-form__signup'>
				<h2 className='text-center'>Log In</h2>
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
					<button disabled={loading} className='btn w-100' type='submit'>
						Log In
					</button>
				</form>
				<div className='text-center'>
					Need an account? <Link to='/admin/signup'>Sign Up</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
