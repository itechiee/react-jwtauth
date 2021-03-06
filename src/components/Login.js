import React, { Component } from 'react';
import './Login.css';
import AuthService from './AuthService';

class Login extends Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.Auth = new AuthService();
	}
	handleChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.Auth.login(this.state.email, this.state.password)
		.then(res => {
			this.props.history.replace('/');
		})
		.catch(err => {
			// console.log(err);
			alert(err)
		})
	}

	componentWillMount() {
		if(this.Auth.loggedIn())
			this.props.history.replace('/')
	}

	render() {
		return(
				 <div className="center">
	                <div className="card">
	                    <h1>Login</h1>
	                    <form onSubmit={this.handleSubmit} >
	                        <input
	                            className="form-item"
	                            placeholder="Email goes here..."
	                            name="email"
	                            type="text"
	                            onChange={this.handleChange}
	                        />
	                        <input
	                            className="form-item"
	                            placeholder="Password goes here..."
	                            name="password"
	                            type="password"
	                            onChange={this.handleChange}
	                        />
	                        <input
	                            className="form-submit"
	                            value="SUBMIT"
	                            type="submit"
	                        />
	                    </form>
	                </div>
	            </div>
			);
	}
}

export default Login;