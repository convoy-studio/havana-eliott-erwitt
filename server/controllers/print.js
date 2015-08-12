var Boom = require('boom');
var Print = require('../models/print');

var controller = {

	getAll : {
		handler : function(request, reply){
			Print.find({}, function (err, prints) {
				if (!err) {
					return reply(prints);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getOne : {
		handler : function(request, reply){
			console.log(request.params);
			Print.findById(request.params.id, function (err, item) {
				if (!err) {
					return reply(item);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	}

	// create : {
	// 	handler : function(request, reply){
	// 		console.log(request.params);
			
	// 		// let print = new Print({
	// 		// 	copies : obj.copies,
	// 		// 	price : obj.price,
	// 		// 	desc : obj.desc,
	// 		// 	artist : obj.artist,
	// 		// 	city : obj.city,
	// 		// 	year : obj.year
	// 		// });

	// 		// print.save( function(error, data) {
	// 		// 	if (error) {
	// 		// 		res.json(error);
	// 		// 	} else {
	// 		// 		res.json(data);
	// 		// 	}
	// 		// });
	// 	}
	// }
	
};

module.exports = controller;