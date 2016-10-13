import PrintActions from '../actions/printActions';
import AppStore from '../stores/appStore';
const config = require('../config');
const cache = new Map();

const retrieve = (url, done) => {
	if (!cache.has(url)) {
		let promise = fetch(url)
			.then((response) => response.clone().json())
			.catch((ex) => console.log('parsing failed', ex))

		cache.set(url, promise);
	}

	return cache.get(url);
};

module.exports = {

	getForSale : function() {
		let language = AppStore.Lang();
		let url = `${config.siteurl}/api/${language}/prints/forsale`;

		return retrieve(url).then(PrintActions.receiveForSale);
	},

	getOneForsale : function(id) {
		let language = AppStore.Lang();
		let url = `${config.siteurl}/api/${language}/prints/forsale/${id}`;

		return retrieve(url).then(PrintActions.receive);
	},

};

// vim: ts=2 sts=2 sw=2 noet
