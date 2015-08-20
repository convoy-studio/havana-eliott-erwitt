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
		handler : function(request, reply) {
			Print.findById(request.params.id, function (err, item) {
				if (!err) {
					return reply(item);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getSlideshow : {
		handler : function(request, reply) {
			Print.find({ slugArtist: request.params.slug })
				 .sort({ year: 'asc'})
				 .exec(function(err, items) {
					if (!err) {
						var result = {
							refs: [],
							prints: {
								prev: items[items.length-1],
								current: items[0],
								next: items[1]
							}
						};

						for(i = 0; i < items.length; i++){
							result.refs.push(items[i]._id);
						}

						return reply(result);
					}
					return reply(Boom.badImplementation(err)); // HTTP 500
				}); 
		}
	},

	getForSale : {
		handler : function(request, reply) {
			Print.find({ forSale: true }, function(err, items) {
				if (!err) {
					return reply(items);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getByArtist : {
		handler : function(request, reply) {
			Print.find({ slugArtist: request.params.slug })
				 .sort({ year: 'asc'})
				 .exec(function(err, items) {
					if (!err) {
						return reply(items);
					}
					return reply(Boom.badImplementation(err)); // HTTP 500
				});
		}
	},

	order : {
		handler : function(request, reply) {
			Print.findById(request.params.id, function (err, item) {
				if (!err) {
					var index = item.serials.indexOf(request.payload.serial);
					if (index > -1) {
						item.serials.splice(index, 1);
					}
					item.save(function(err){
						if(!err){
							return reply(item);
						} else {
							return reply('Order failed');
						}
					});
				} else {
					return reply(Boom.badRequest(err)); // HTTP 500
				}
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