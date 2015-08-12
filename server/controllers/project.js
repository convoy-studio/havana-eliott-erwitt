var Boom = require('boom');
var Project = require('../models/project');

var controller = {

	getOne : {
		handler : function(request, reply){
			Project.findById(request.params.id, function (err, item) {
				if (!err) {
					return reply(item);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	}
	
};

module.exports = controller;