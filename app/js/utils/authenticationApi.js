import Api from './api';

export function login(user){
	return Api.post('/auth/login', {
		user: user
	});
}

export function signup(user){
	return Api.post('/auth/signup', {
		user: user
	});
}

export function signupWithFacebook(){
	// return fetch('/api/auth/facebook', {
	// 	method : 'post',
	// 	headers : {
	// 		'Access-Control-Allow-Origin' : '*'
	// 	}
	// }).then(res => res.json())
}

export function signupWithTwitter(){
	// return fetch('/api/auth/twitter')
	// 	.then(res => res.json())
}