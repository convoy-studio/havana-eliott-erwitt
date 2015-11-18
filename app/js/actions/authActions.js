import * as constants from '../constants/authConstants';
import * as AuthenticationApi from '../utils/authApi';

export function login(user){
	return {
		types : [
			constants.AUTH_LOGIN_PENDING,
			constants.AUTH_LOGIN_SUCCESS,
			constants.AUTH_LOGIN_FAIL
		],
		payload: AuthenticationApi.login(user)
	};
}

export function signup(user){
	return {
		types : [
			constants.AUTH_SIGNUP_PENDING,
			constants.AUTH_SIGNUP_SUCCESS,
			constants.AUTH_SIGNUP_FAIL
		],
		payload: AuthenticationApi.signup(user)
	};
}

export function isLoaded(globalState) {
	return globalState.auth && globalState.auth.loaded;
}

export function load() {
	return {
	    types: [
	    	constants.AUTH_LOAD_PENDING, 
	    	constants.AUTH_LOAD_SUCCESS, 
	    	constants.AUTH_LOAD_FAIL
	    ],
	    payload: AuthenticationApi.load()
	};
}