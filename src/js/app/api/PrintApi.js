import PrintActions from 'PrintActions'
import 'fetch'
let config = require('../config');

module.exports = {

	getAll : function() {
		fetch(config.siteurl + '/api/prints')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				PrintActions.receiveAll(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getForSale : function() {
		fetch(config.siteurl + '/api/prints/forsale')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				PrintActions.receiveForSale(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getSlideshow : function(artist, id) {
		fetch(config.siteurl + '/api/prints/' + artist + '/slideshow/' + id)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				PrintActions.receiveSlideshow(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getByArtist : function(artist) {
		fetch(config.siteurl + '/api/prints/' + artist)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				PrintActions.receiveFromArtist(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getOne : function(id) {
		fetch(config.siteurl + '/api/print/' + id)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				PrintActions.receive(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	order : function(id, serial) {
		console.log(serial)
		fetch(config.siteurl + '/api/print/' + id, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'serial' : serial
			})
		})
	},

	create : function(print){
		fetch(config.siteurl + '/api/prints', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'print' : print
			})
		});
	}

};