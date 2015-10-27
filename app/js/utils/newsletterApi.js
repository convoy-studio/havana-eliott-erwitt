import NewsletterActions from '../actions/newsletterActions';
let config = require('../config');

module.exports = {

	getAll : function() {
		fetch(config.siteurl + '/api/newsletters')
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				NewsletterActions.receiveAll(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	getOne : function(id) {
		fetch(config.siteurl + '/api/newsletter/' + id)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				NewsletterActions.receive(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	create : function(mail){
		fetch(config.siteurl + '/api/newsletter', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mail)
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			NewsletterActions.created(json);
		}).catch(function(err) {
			console.log('parsing failed', err);
		});
	},

	unsubscribe : function(id){
		fetch(config.siteurl + '/api/newsletter/unsubscribe/' + id)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				NewsletterActions.unsubscribed(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	}

};