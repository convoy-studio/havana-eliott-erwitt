import LoginConstants from 'LoginConstants'
import AppDispatcher from 'AppDispatcher'
import Router from 'Router'
// import RouterContainer from '../services/RouterContainer'

var LoginActions = {
	loginUser: (jwt) => {
		// Go to the Home page once the user is logged in
		// RouterContainer.get().transitionTo('/');
		// Router.setHash('/admin');
		window.location.href = '#/admin';
		// We save the JWT in localStorage to keep the user authenticated. We'll learn more about this later.
		localStorage.setItem('jwt', jwt);
		// Send the action to all stores through the Dispatcher
		AppDispatcher.handleServerAction({
			actionType: LoginConstants.LOGIN_USER,
			jwt: jwt
		});
	}
}

export default LoginActions