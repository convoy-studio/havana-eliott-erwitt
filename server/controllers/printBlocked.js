import PrintBlocked from '../models/printBlocked';
var Boom = require('boom');

var controller = {
	delete: {
		handler: function(request, reply) {
			PrintBlocked.findOneAndRemove({
				print_token: request.params.token,
				serial: request.payload.serial
			}, function(err, item) {
				if (err) {
					return reply(Boom.badRequest(err)); // HTTP 500
				}
				return reply('Deleted');
			});
		}
	},

	create: {
		handler: function(request, reply) {
			PrintBlocked.create({
				print_token: request.params.token,
				serial: request.payload.serial
			}, function(err, data) {
				if (!err) {
					return reply(data);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},
};

module.exports = controller;
