import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components';

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
			<div className='admin__form-login'>
				<h2 className='text-center'>Log In</h2>
				{error && <div>{error}</div>}
				<form className='admin__form' onSubmit={handleSubmit}>
					<label className='admin__form-label'>
						Email
						<input className='admin__form-input' type='email' ref={emailRef} required />
					</label>
					<label className='admin__form-label'>
						Password
						<input className='admin__form-input' type='password' ref={passwordRef} required />
					</label>
					<Button type='submit' disabled={loading}>
						Log In
					</Button>
				</form>
				<p>Test account: email - kybbot1@gmail.com password - kybbot1</p>
				<p className='text-center'>
					Need an account? <Link to='/signup'>Sign Up</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
