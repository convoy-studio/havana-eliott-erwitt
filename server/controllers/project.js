import Boom from 'boom';
import Project from '../models/project';
import Print from '../models/print';
let _ = require('lodash');

const controller = {

	getAll : {
		handler : function(request, reply){
			Project.find({}, function (err, items) {
				if (!err) {
					let projects = [];
					for(let i = 0; i < items.length; ++i) {
						projects.push({
							artist: items[i].artist,
							desc: items[i].desc,
							slug: items[i].slug
						});
					}
					return reply(projects);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getFirsts : {
		handler : function(request, reply){
			Project.find({})
				.sort({ priority: 'desc'})
				.exec(function (err, items) {
					if (!err) {
						let projects = [];
						let printIndex = 0;
						_(items).forEach(function(item, index) {
							Print.find({ project_id: item._id })
								.sort({ year: 'desc'})
								.exec(function (err, print_items) {
									if (!err) {
										let prints = _.sortByOrder(print_items, ['forsale'], ['desc']);
										projects.push({
											artist: item.artist,
											desc: item.desc,
											slug: item.slug,
											print: prints[0]
										});

										if (projects.length === items.length) {
											return reply(projects);
										}
									} else {
										return reply(Boom.badImplementation(err)); // HTTP 500
									}
								});
						}).value();
					} else {
						return reply(Boom.badImplementation(err)); // HTTP 500
					}
				});
		}
	},

	getById : {
		handler : function(request, reply){
			Project.findById(request.params.id, function (err, item) {
				if (!err) {
					let project = {
						artist: item.artist,
						desc: item.desc,
						slug: item.slug
					}
					return reply(project);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getBySlug : {
		handler : function(request, reply){
			Project.findOne({ slug: request.params.slug }, function(err, item) {
				if (!err) {
					let project = {
						artist: item.artist,
						desc: item.desc,
						slug: item.slug
					}
					return reply(project);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	}
	
};

module.exports = controller;