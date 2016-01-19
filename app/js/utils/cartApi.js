import CartActions from '../actions/cartActions';
let config = require('../config');
const siteUrl = config.siteurl;
// const siteurl = 'http://localhost:3010';

module.exports = {

	generatePayButton : function(options) {
		let data = '';
		for (let key in options) {
			if (data != "") {
				data += "&";
			}
			data += key + "=" + encodeURIComponent(options[key]);
		}

		fetch(siteurl + '/authorization.php', {
			method: 'post',
			headers: {
				'Accept': 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		}).then(function(response) {
			console.log('receiveForm', response);
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
