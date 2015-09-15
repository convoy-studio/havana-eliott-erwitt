import ProjectActions from 'ProjectActions'
import 'fetch'
let config = require('../config');

module.exports = {

	getAll : function() {
		fetch(config.siteurl + '/api/projects')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				ProjectActions.receiveAll(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getBySlug : function(slug) {
		fetch(config.siteurl + '/api/project/slug/' + slug)
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				ProjectActions.receive(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	},

	getFirsts : function() {
		fetch(config.siteurl + '/api/projects/firsts')
			.then(function(response) {
				return response.json()
			}).then(function(json) {
				ProjectActions.receiveFirsts(json)
			}).catch(function(ex) {
				console.log('parsing failed', ex)
			});
	}

};