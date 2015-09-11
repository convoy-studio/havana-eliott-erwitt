import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from 'Auth'
import Page from 'Page'
import AppStore from 'AppStore'

export default class Login extends Page {

	constructor(props) {
		super(props)

		this.state = {
			user: '',
			password: ''
		};

		document.querySelector('#frontContainer').style.display = 'none'
	}

	componentDidMount() {
		super.componentDidMount()
	}

	didTransitionOutComplete() {
		super.didTransitionOutComplete()
	}

	render() {
		return (
			<div className='page page--login' ref='page-wrapper'>
				<form role='form'>
					<div className='form-group'>
						<input type='text' valueLink={this.linkState('user')} placeholder='Username' />
						<input type='password' valueLink={this.linkState('password')} placeholder='Password' />
					</div>
					<button type='submit' onClick={this.login.bind(this)}>Submit</button>
				</form>
			</div>
		)
	}

	login(e) {
		e.preventDefault();

		Auth.login(this.state.user, this.state.password)
			.catch((err) => {
				console.log('Error logging in', err);
			});
	}

	resize() {
		let windowW = AppStore.Window.w
		let windowH = AppStore.Window.h
		super.resize()
	}

}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);