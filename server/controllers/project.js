var Boom = require('boom');
var Project = require('../models/project');
var Print = require('../models/print');
var _ = require('lodash');

var controller = {

	getAll : {
		handler : function(request, reply){
			Project.find({}, function (err, items) {
				if (!err) {
					var projects = [];
					for(i = 0; i < items.length; ++i) {
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
			Project.find({}, function (err, items) {
				if (!err) {
					var projects = [];
					_(items).forEach(function(item, index) {
						Print.find({ project_id: item._id })
							.sort({ year: 'desc'})
							.exec(function (err, print_items) {
								if (!err) {
									projects.push({
										artist: item.artist,
										desc: item.desc,
										slug: item.slug,
										print: print_items[0]
									});
									if (index >= items.length-1) {
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
					var project = {
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
					console.log(item)
					var project = {
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