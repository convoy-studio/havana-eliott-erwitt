var Boom = require('boom');
var OpeningShop = require('../models/openingShop');
let _ = require('lodash');

var controller = {

	getAll : {
		handler : function(request, reply){
			OpeningShop.find({}, function (err, items) {
				if (!err) {
					return reply(items);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getOne : {
		handler : function(request, reply){
			OpeningShop.findById(request.params.id, function (err, item) {
				if (!err) {
					return reply(item);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	create : {
		handler : function(request, reply){
			OpeningShop.find({}, function (err, items) {
				if (!err) {
					let alreadyExist = false,
						index = 0;

					while (index < items.length && !alreadyExist) {
						if (items[index].mail === request.payload.mail) alreadyExist = true;
						index++;
					}

					if (alreadyExist) {
						const response = {
							success: false,
							message: 'Email already subscribed.'
						}
						return reply(response);
					} else {
						var openingShop = new OpeningShop({
							mail: request.payload.mail
						});

						openingShop.save( function(err, data) {
							if (!err) {
								const response = {
									success: true,
									message: 'Email successfully subscribed.'
								}
								return reply(response);
							} else {
								const response = {
									success: false,
									message: 'Error'
								}
								return reply(response); // HTTP 500
							}
						});
					}
				} else {
					const response = {
						success: false,
						message: 'Error'
					}
					return reply(response); // HTTP 500
				}
			});
		}
	}
	
};

module.exports = controller;