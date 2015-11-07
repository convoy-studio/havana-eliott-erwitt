import React, { Component } from 'react';
import { Link } from 'react-router';
// import { login } from '../../../actions/authActions';
// import { signup } from '../../../actions/authActions';
// import storage from '../../../utils/storage';
import Auth from '../../../utils/AuthService'
let config = require('../../../config');

export default class Login extends Component {

	constructor() {

		super();

		this.state = {
			identifiant: '',
			password: ''
		};

	}

	componentWillMount() {

		// binded
		this.login = this.login.bind(this);
		this.signup = this.signup.bind(this);
		
	}

	render() {

		return (
			<div className='admin__order'>
				<h1 className='title title--center title--absolute'><span>Login</span></h1>
				<form className='admin__form form'>
					<div className='form__row'>
						<label className='form__label' htmlFor='id'>Identifiant</label>
						<input type='text' ref='id'></input>
					</div>
					<div className='form__row'>
						<label className='form__label' htmlFor='pwd'>Password</label>
						<input type='password' ref='pwd'></input>
					</div>
					<div className='admin__row'>
						<a href='' className='button' onClick={this.login}>Login</a>
						<a href='' className='button' onClick={this.signup}>Signup</a>
					</div>
				</form>
			</div>
		);

	}

	// login(e) {
		
	// 	e.preventDefault();
		
	// 	let id = this.refs.id.getDOMNode().value;
	// 	let pwd = this.refs.pwd.getDOMNode().value;

	// 	if(id && pwd){
	// 		let user = {
	// 			identifiant : id,
	// 			password: pwd
	// 		};
	// 		login(user).payload
	// 			.then((payload)=>{
	// 				console.log(payload);
	// 				if(payload.success){
	// 					storage.set('token', payload.data.token);
	// 				}
	// 			});
	// 	}

	// }

	login(e) {

		e.preventDefault();
		
		let id = this.refs.id.getDOMNode().value;
		let pwd = this.refs.pwd.getDOMNode().value;

		if (id && pwd) {
			// Here, we call an external AuthService. We’ll create it in the next step
			let user = {
				identifiant : id,
				password: pwd
			};
			Auth.login(user);
				// .catch(function(err) {
				// 	console.log('Error logging in', err);
				// });
		}
	}

	signup(e) {

		e.preventDefault()

		let id = this.refs.id.getDOMNode().value;
		let pwd = this.refs.pwd.getDOMNode().value;

		if(id && pwd){
			let user = {
				identifiant : id,
				password: pwd
			};
			// signup(user);
			Auth.signup(user);
				// .catch(function(err) {
				// 	console.log('Error logging in', err);
				// });
		}

	}

}
