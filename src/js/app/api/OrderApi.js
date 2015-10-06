import OrderActions from 'OrderActions'
let config = require('../config');

module.exports = {

	create : function(order){
		console.log(order);
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