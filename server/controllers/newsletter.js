var Boom = require('boom');
var Newsletter = require('../models/newsletter');
let _ = require('lodash');

var controller = {

	getAll : {
		handler : function(request, reply){
			Newsletter.find({}, function (err, items) {
				if (!err) {
					return reply(items);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getOne : {
		handler : function(request, reply){
			Newsletter.findById(request.params.id, function (err, item) {
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
			Newsletter.find({}, function (err, items) {
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
							message: 'Email already subscribe.'
						}
						return reply(response);
					} else {
						var newsletter = new Newsletter({
							mail: request.payload.mail
						});

						newsletter.save( function(err, data) {
							if (!err) {
								const response = {
									data: data,
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
	},

	unsubscribe : {
		handler : function(request, reply) {
			Newsletter.findById(request.params.id).remove().exec(function(err, items) {
				if (!err) {
					return reply({success:true, message:'You have been unsubscribed from our newsletter.'});
				} else {
					return reply({success:false, message:'You are already unsubscribed from our newsletter.'});
				}
			});
		}
	},
	
};

module.exports = controller;