var Boom = require('boom');
var Artist = require('../models/artist');

var controller = {

	getAll : {
		handler : function(request, reply){
			Artist.find({}, function (err, artists) {
				if (!err) {
					return reply(artists);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getOne : {
		handler : function(request, reply){
			Artist.findOne({ slug: request.params.slug })
				.populate('project')
				.exec(function (err, item) {
					if (!err) {
						var artist = {
							name : item.name,
							bio : item.bio,
							photo : item.photo,
							project : {
								title : item.project.title,
								desc : item.project.desc
							}
						};
						return reply(artist);
					}
					return reply(Boom.badImplementation(err)); // HTTP 500
				});
		}
	}
	
};

module.exports = controller;