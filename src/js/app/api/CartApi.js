import CartActions from 'CartActions'
import 'fetch'
let config = require('../config');

module.exports = {

	generatePayButton : function(options) {
		let data = 'total='+options.total

		fetch('http://localhost/freelance/Havana/php/buy.php', {
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
		for (var key in options) {
			if (data != "") {
				data += "&";
			}
			data += key + "=" + encodeURIComponent(options[key]);
		}
		console.log(data)
		fetch('http://localhost/freelance/Havana/php/check.php', {
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