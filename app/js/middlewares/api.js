import Storage from '../utils/storage';
import { Promise } from 'es6-promise';
import fetch from 'isomorphic-fetch';


const API_ROOT = '/api';

export default function callApi(args) {
	let endpoint = args.endpoint;
	let method = args.method || 'get';
	let data = args.data || {};
	let requireAuth = args.requireAuth || false;

	if (typeof endpoint !== 'string') {
    	throw new Error('Specify a string endpoint URL.');
  	}

	let fetchArgs = {
		headers : {}
	};

	if(method != 'get'){
		fetchArgs.method = method;
		fetchArgs.body = JSON.stringify(data);
		fetchArgs.headers = {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
		};
	}
	
	let userToken = Storage.get('token');
	if(userToken){
		fetchArgs.headers['Authorization'] = 'Bearer ' + userToken;
	}

	if (endpoint.indexOf(API_ROOT) === -1) {
    	endpoint = API_ROOT + endpoint;
  	}

  	return fetch(endpoint, fetchArgs)
    	.then(response => response.json())
    	.then(response => {
    		if(response.success === false || response.statusCode != 200){
    			return Promise.reject(response);
    		}

    		return response;
    	})
}
