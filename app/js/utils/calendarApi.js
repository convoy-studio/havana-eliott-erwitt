import Api from './api';
import { Promise } from 'es6-promise';
import Storage from './storage';

export function fetchCalendars(){
	return Api.get('/api/calendars');
}

export function fetchCalendar(slug){
	return Api.get('/api/calendar/' + slug)
}

export function createCalendar(calendar){
	return Api.post('/api/calendar', calendar);
}

export function fetchMyCalendars(){
	return Api.get('/api/calendars/mine');
}

export function fetchStars(){
	return new Promise((resolve, reject) => {
		let response = {};
		if(Storage.get('token')){
			Api.get('/api/calendars/stars');
		}else {
			let stars = Storage.get('stars');
			response.data = stars || {};
			response.success = true;

			resolve(response);
		}
	});
};

export function starCalendar(slug){
	return new Promise((resolve, reject) => {
		let response = {};
		if(Storage.get('token')){
			Api.put('/api/calendar/star/' + slug, {}).then((res) => { resolve(res)});
		}else {
			let stars = Storage.get('stars');
			if(!stars){
				stars = [];
			}
			stars.push(slug);
			Storage.set('stars', stars);

			response.success = true;
			response.data = stars;
			resolve(response);
		}
	});
};