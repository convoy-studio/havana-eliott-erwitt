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

	getPaid : {
		handler : function(request, reply){
			Order.find({ state: 'in_progress' }, function (err, items) {
				if (!err) {
					return reply(items);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getDelivered : {
		handler : function(request, reply){
			Order.find({ state: 'delivered' }, function (err, items) {
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
				if (!err) {
					return reply(item);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	updateState : {
		handler : function(request, reply) {
			Order.findById(request.params.id, function(err, item) {
				if (!err) {
					item.state = request.payload.state;
					item.save(function(err){
						if(!err){
							return reply({message:'success'});
						} else {
							return reply('Update state failed');
						}
					});
				} else {
					return reply(Boom.badRequest(err)); // HTTP 500
				}
			});
		}
	},

	create : {
		handler : function(request, reply){
			var order = new Order({
				// time : new Date().getTime(),

				user: request.payload.user,
				prints: request.payload.prints,
				total: request.payload.total,
				state : 'in_progress',
				
				mail: request.payload.mail,
				firstname: request.payload.firstname,
				lastname: request.payload.lastname,
				phone: request.payload.phone,
				address: request.payload.address,
				zip: request.payload.zip,
				city: request.payload.city,
				country: request.payload.country,

				billFirstname: request.payload.billFirstname || undefined,
				billLastname: request.payload.billLastname || undefined,
				billPhone: request.payload.billPhone || undefined,
				billAddress: request.payload.billAddress || undefined,
				billZip: request.payload.billZip || undefined,
				billCity: request.payload.billCity || undefined,
				billCountry: request.payload.billCountry || undefined
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