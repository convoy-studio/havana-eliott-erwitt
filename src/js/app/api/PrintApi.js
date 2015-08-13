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
			// .then(function(response) {
			// 	let prints = JSON.parse(response)
			// 	PrintActions.receiveAll(prints)
			// }).catch(function(error) {
			// 	console.log('request failed', error)
			// })
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