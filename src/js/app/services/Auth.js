import request from 'reqwest';
import when from 'when';
import LoginActions from 'LoginActions';
let config = require('../config');

class Auth {

	login(username, password) {
		// We call the server to log the user in.
		return when(request({
			url: config.siteurl + '/api/sessions/create',
			method: 'POST',
			crossOrigin: true,
			type: 'json',
			data: {
				username, password
			}
		})).then(function(response) {
			// We get a JWT back.
			let jwt = response.id_token;
			// We trigger the LoginAction with that JWT.
			LoginActions.loginUser(jwt);
			return true;
		});
	}
}

export default new Auth()