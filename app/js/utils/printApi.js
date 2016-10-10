import PrintActions from '../actions/printActions';
import AppStore from '../stores/appStore';
const config = require('../config');

module.exports = {

	getForSale : function() {
    let language = AppStore.Lang();
    let url = `${config.siteurl}/api/${language}/prints/forsale`;

		fetch(url)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				PrintActions.receiveForSale(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getOneForsale : function(id) {
    let language = AppStore.Lang();
    let url = `${config.siteurl}/api/${language}/prints/forsale/${id}`;

		fetch(url)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				PrintActions.receive(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

};
