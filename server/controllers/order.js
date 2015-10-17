var Boom = require('boom');
var Order = require('../models/order');

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
			console.log(request.payload.prints);
			var order = new Order({
				time : new Date().getTime(),
				user : request.payload.user,
				state : 'in_progress',
				prints : request.payload.prints
			});

			order.save( function(err, data) {
				if (!err) {
					return reply(data)
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	}
	
};

module.exports = controller;