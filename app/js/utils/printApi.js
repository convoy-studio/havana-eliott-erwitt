import PrintActions from '../actions/printActions';
import AppStore from '../stores/appStore';
import LRU from 'lru-cache';
const config = require('../config');
const cache = new LRU({max: 50, maxAge: 15 * 60 * 1000});

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

	getOneForSale : function(id) {
		let language = AppStore.Lang();
		let url = `${config.siteurl}/api/${language}/prints/forsale/${id}`;

		return retrieve(url).then(PrintActions.receive);
	},

};
