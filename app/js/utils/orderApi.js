import OrderActions from '../actions/orderActions';
let config = require('../config');

module.exports = {

	getAll : function() {
		fetch(config.siteurl + '/api/orders')
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				OrderActions.receiveAll(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	getPaid : function() {
		fetch(config.siteurl + '/api/orders/paid')
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				OrderActions.receivePaid(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	getDelivered : function() {
		fetch(config.siteurl + '/api/orders/delivered')
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				console.log(json);
				OrderActions.receiveDelivered(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	getOne : function(id) {
		fetch(config.siteurl + '/api/order/' + id)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				OrderActions.receive(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	updateOrder : function(id, status, tracking) {
		fetch(config.siteurl + '/api/order/' + id, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				state : status,
				tracking : tracking
			})
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			OrderActions.stateUpdated(json);
		}).catch(function(err) {
			console.log('parsing failed', err);
		});
	},

	updateState : function(id, state) {
		fetch(config.siteurl + '/api/order/' + id + '/state', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({state:state})
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			OrderActions.stateUpdated(json);
		}).catch(function(err) {
			console.log('parsing failed', err);
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
			return response.json();
		}).then(function(json) {
			OrderActions.created(json);
		}).catch(function(err) {
			console.log('parsing failed', err);
		});
	}

};