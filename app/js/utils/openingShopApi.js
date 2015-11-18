import OpeningShopActions from '../actions/openingShopActions';
let config = require('../config');

module.exports = {

	getAll : function() {
		fetch(config.siteurl + '/api/openingShops')
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				OpeningShopActions.receiveAll(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	getOne : function(id) {
		fetch(config.siteurl + '/api/openingShop/' + id)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				OpeningShopActions.receive(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	create : function(mail){
		fetch(config.siteurl + '/api/openingShop', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mail)
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			OpeningShopActions.created(json);
		}).catch(function(err) {
			console.log('parsing failed', err);
		});
	}

};