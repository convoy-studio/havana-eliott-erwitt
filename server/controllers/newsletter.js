var Boom = require('boom');
var Newsletter = require('../models/newsletter');

var controller = {

	getAll : {
		handler : function(request, reply){
			Order.find({}, function (err, items) {
				if (!err) {
					return reply(items);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getOne : {
		handler : function(request, reply){
			Order.findById(request.params.id, function (err, item) {
				console.log(item);
				if (!err) {
					return reply(item);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	create : {
		handler : function(request, reply){
			var newsletter = new Newsletter({
				mail: request.payload.mail
			});

			newsletter.save( function(err, data) {
				if (!err) {
					return reply(data)
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	}
	
};

module.exports = controller;