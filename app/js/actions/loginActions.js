import AppDispatcher from '../dispatchers/appDispatcher';
import {LOGIN_USER, LOGOUT_USER} from '../constants/loginConstants';
// import RouterContainer from '../services/RouterContainer'

// export default {
let LoginActions = {
	
	loginUser: (jwt) => {

		var savedJwt = localStorage.getItem('jwt');

		// AppDispatcher.dispatch({
		// 	actionType: LOGIN_USER,
		// 	jwt: jwt
		// });
		AppDispatcher.handleServerAction({
			actionType: LOGIN_USER,
			jwt: jwt
		});

		if (savedJwt !== jwt) {
			// var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

			// RouterContainer.get().transitionTo(nextPath);
			localStorage.setItem('jwt', jwt);
		}

	},

	logoutUser: () => {

		// RouterContainer.get().transitionTo('/login');
		// localStorage.removeItem('jwt');
		// AppDispatcher.dispatch({
		// 	actionType: LOGOUT_USER
		// });

	}

}

export default LoginActions;