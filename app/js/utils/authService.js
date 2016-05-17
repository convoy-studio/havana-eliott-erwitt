import {LOGIN_URL, SIGNUP_URL} from '../constants/loginConstants';
import LoginActions from '../actions/loginActions';
let config = require('../config');

class AuthService {

login(user) {

	// return this.handleAuth(when(request({
	// 	url: config.siteurl + '/api/auth/login',
	// 	method: 'POST',
	// 	crossOrigin: true,
	// 	type: 'json',
	// 	data: user
	// })));

	return fetch(config.siteurl + '/api/auth/login', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	}).then(function(response) {
		return response.json();
	}).then(function(json) {
        if (!json.success) {
			throw new Error(json.message);
		}
		let jwt = json.data.token;
		LoginActions.loginUser(jwt);
	});

}

logout() {

	LoginActions.logoutUser();

}

signup(user) {

	return fetch(config.siteurl + '/api/auth/signup', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});
	// return this.handleAuth(when(request({
	// 	url: config.siteurl + '/api/auth/signup',
	// 	method: 'POST',
	// 	crossOrigin: true,
	// 	type: 'json',
	// 	data: user
	// })));

}

handleAuth(loginPromise) {

	return loginPromise
		.then(function(response) {
			var jwt = response.token;
			LoginActions.loginUser(jwt);
			return true;
		});
	}

}

export default new AuthService()
