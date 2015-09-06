import CartActions from 'CartActions'
import 'fetch'
let config = require('../config');

module.exports = {

	generatePayButton : function(options) {
		let data = 'total='+options.total

		fetch(config.siteurl + '/buy.php', {
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

	checkResponse : function(options) {
		let data = '';
		for (let key in options) {
			if (data != "") {
				data += "&";
			}
			data += key + "=" + encodeURIComponent(options[key]);
		}
		fetch(config.siteurl + '/check.php', {
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