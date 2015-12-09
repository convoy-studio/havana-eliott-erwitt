import CartActions from '../actions/cartActions';
let config = require('../config');
const siteurl = 'http://localhost/havana_be2bill';

module.exports = {

	generatePayButton : function(options) {
		let data = '';
		for (let key in options) {
			if (data != "") {
				data += "&";
			}
			data += key + "=" + encodeURIComponent(options[key]);
		}

		// fetch(config.siteurl + '/authorization.php', {
		fetch(siteurl + '/authorization.php', {
			method: 'post',
			headers: {
				'Accept': 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		}).then(function(response) {
			return response.text()
		}).then(function(body) {
			CartActions.receiveForm(body)
		}).catch(function(err) {
			console.log('parsing failed', err)
		});
	},

	paypalPayment : function(options) {
		let data = '';
		for (let key in options) {
			if (data != "") {
				data += "&";
			}
			data += key + "=" + encodeURIComponent(options[key]);
		}

		// fetch(config.siteurl + '/paypal.php', {
		fetch(siteurl + '/paypal.php', {
			method: 'post',
			headers: {
				'Accept': 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		});
	},

	checkResponse : function(options) {
		let data = '';
		for (let key in options) {
			if (data != "") {
				data += "&";
			}
			data += key + "=" + encodeURIComponent(options[key]);
		}
		// fetch(config.siteurl + '/check.php', {
		fetch(siteurl + '/check.php', {
			method: 'post',
			headers: {
				'Accept': 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		}).then(function(response) {
			return response.text()
		}).then(function(body) {
			CartActions.receiveCheck(body)
		}).catch(function(err) {
			console.log('parsing failed', err)
		});
	}

};