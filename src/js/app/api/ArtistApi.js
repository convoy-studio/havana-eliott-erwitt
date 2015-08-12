import ArtistActions from 'ArtistActions'
import 'fetch'
let config = require('../config');

module.exports = {

	getAll : function() {
		fetch(config.siteurl + '/api/artists')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				console.log(json)
				ArtistActions.receiveAll(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getBySlug : function(slug) {
		fetch(config.siteurl + '/api/artist/' + slug)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				ArtistActions.receive(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	}

};