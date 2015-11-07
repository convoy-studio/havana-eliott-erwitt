import React, { Component } from 'react';
import ComponentTransition from '../componentTransition';
import { Link } from 'react-router';
import Auth from '../../utils/authService'
let config = require('../../config');

export default class Login extends ComponentTransition {

	_enterStyle() {
	
		let el = this.refs.view.getDOMNode();
		let header = document.querySelector('.header');
		let footer = document.querySelector('.footer');

		header.style.display = 'none';
		footer.style.display = 'none';
		el.style.opacity = 1;
	
	}
	
	_leaveStyle(callback) {
		
		let el = this.refs.view.getDOMNode();
		TweenMax.to(el, 0.3, {opacity: 0, ease:Power2.easeOut, onComplete: callback});
	
	}

	componentWillMount() {

		// binded
		this.login = this.login.bind(this);
		this.signup = this.signup.bind(this);
		
	}

	render() {

		return (
			<div className='admin__order' ref='view'>
				<h1 className='title title--center title--absolute'><span>Admin</span></h1>
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
					</div>
				</form>
			</div>
		);
						// <a href='' className='button' onClick={this.signup}>Signup</a>

	}

	login(e) {

		e.preventDefault();
		
		let id = this.refs.id.getDOMNode().value;
		let pwd = this.refs.pwd.getDOMNode().value;

		if (id && pwd) {
			let user = {
				identifiant : id,
				password: pwd
			};
			Auth.login(user);
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
