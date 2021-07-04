import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import ErrorField from '../component/ErrorField';
import { userSiginIn, fetchStatus } from '../store/actions';

function LoginPage() {
	const login = useSelector(state => state.login);

	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const dispatch = useDispatch();

	const handleUserName = (el) => {
		dispatch(fetchStatus(null, "CLEAR_LOGIN_ERROR"));
		setUserName(el.target.value)
	}

	const handlePassword = (el) => {
		dispatch(fetchStatus(null, "CLEAR_LOGIN_ERROR"));
		setPassword(el.target.value)
	}

	return (
		<div className="container">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign In</h3>
					</div>
					<div className="card-body">
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" autoComplete="false"
								className="form-control"
								placeholder="username"
								onChange={(el) => handleUserName(el)}
							/>
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" autoComplete="false"
								onChange={(el) => handlePassword(el)}
								className="form-control" placeholder="password" />
						</div>
						{login && login.error ? <ErrorField error={login.error} /> : null}
						<div className="form-group">
							<button type="submit" className="btn float-right login_btn"
								onClick={() => dispatch(userSiginIn(userName, password))}
							>Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;