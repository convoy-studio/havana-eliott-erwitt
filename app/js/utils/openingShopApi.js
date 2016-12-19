import OpeningShopActions from '../actions/openingShopActions';
let config = require('../config');

module.exports = {

	getAll : function() {
        let url = `${config.siteurl}/api/openingShops`;
		fetch(url)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				OpeningShopActions.receiveAll(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	getOne : function(id) {
        let url = `${config.siteurl}/api/openingShop/${id}`;
		fetch(url)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				OpeningShopActions.receive(json);
			}).catch(function(ex) {
				console.log('parsing failed', ex);
			});
	},

	create : function(mail){
        let url = `${config.siteurl}/api/openingShop`;
		fetch(url, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(mail)
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
            document.getElementById('mail').value = '';
            let label = document.querySelector('label[for="mail"]');
            label.textContent = json.message;

			OpeningShopActions.created(json);
		}).catch(function(err) {
			console.log('parsing failed', err);
		});
	}
};