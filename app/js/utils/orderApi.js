import OrderActions from '../actions/orderActions';
let config = require('../config');

module.exports = {

	getAll : function() {
		fetch(config.siteurl + '/api/orders')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				OrderActions.receiveAll(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getOne : function(id) {
		fetch(config.siteurl + '/api/order/' + id)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				console.log(json)
				OrderActions.receive(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	create : function(order){
		fetch(config.siteurl + '/api/order', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(order)
		}).then(function(response) {
			return response.json()
		}).then(function(json) {
			OrderActions.created(json)
		}).catch(function(err) {
			console.log('parsing failed', err)
		});
	}

};