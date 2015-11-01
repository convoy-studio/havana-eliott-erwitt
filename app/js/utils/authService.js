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

	fetch(config.siteurl + '/api/auth/login', {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	}).then(function(response) {
		return response.json();
	}).then(function(json) {
		console.log(json);
		let jwt = json.data.token;
		LoginActions.loginUser(jwt);
	}).catch(function(err) {
		console.log('parsing failed', err);
	});

}

logout() {

	LoginActions.logoutUser();

}

signup(user) {

	console.log(user);
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
			console.log(response);
			var jwt = response.token;
			LoginActions.loginUser(jwt);
			return true;
		});
	}

}

export default new AuthService()