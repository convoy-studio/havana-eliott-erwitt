var Boom = require('boom');
var Print = require('../models/print');
var Project = require('../models/project');
var rand = require('rand-token').uid;
var _ = require('lodash');

function generateToken(hash, callback) {
	var key = rand(6);
	if ( key != hash ) {
		Print.find({ token: key }, function(err, print){
			if ( print.length == 0 ) {
				callback(key);
			} else {
				generateToken(hash);
			}
		});
	} else {
		generateToken(hash);
	}
}

var controller = {

	getAll : {
		handler : function(request, reply){
			Print.find({}, function (err, items) {
				if (!err) {
					var prints = [];
					for(i = 0; i < items.length; ++i) {
						prints.push({
							title: items[i].title,
							city: items[i].city,
							country: items[i].country,
							year: items[i].year,
							file: items[i].file,
							copies: items[i].copies,
							serials: items[i].serials,
							desc: items[i].desc,
							price: items[i].price,
							forsale: items[i].forsale
						});
					}
					return reply(prints);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getByToken : {
		handler : function(request, reply){
			Print.findOne({ token: request.params.token }, function(err, print_item) {
				if (!err) {
					// recupérer les infos du projet de la photo
					Project.findById(print_item.project_id, function (err, project_item) {
						if (!err) {
							var project = {
								artist: project_item.artist,
								desc: project_item.desc,
								slug: project_item.slug
							}
							var print = {
								token: print_item.token,
								title: print_item.title,
								city: print_item.city,
								country: print_item.country,
								year: print_item.year,
								file: print_item.file,
								copies: print_item.copies,
								serials: print_item.serials,
								desc: print_item.desc,
								price: print_item.price,
								forsale: print_item.forsale,
								project: project
							};
							return reply(print);
						} else {
							return reply(Boom.badImplementation(err)); // HTTP 500
						}
					});
				} else {
					return reply(Boom.badImplementation(err)); // HTTP 500
				}
			});
		}
	},

	getByArtist : {
		handler : function(request, reply) {
			Print.find({ slugArtist: request.params.slug })
				 .sort({ year: 'desc'})
				 .exec(function(err, items) {
					if (!err) {
						var result = []
						for(i = 0; i < items.length; i++){
							result.push(items[i]);
						}
						return reply(result);
					}
					return reply(Boom.badImplementation(err)); // HTTP 500
				});
		}
	},

	getByArtist : {
		handler : function(request, reply){
			Project.findOne({ slug: request.params.slug }, function(err, project_item) {
				if (!err) {
					// recupérer les photos du projet
					// Print.find({ project_id: project_item._id }, function(err, print_items) {
					Print.find({ project_id: project_item._id })
						.sort({ year: 'desc'})
						.exec(function(err, print_items) {
							if (!err) {
								var prints = [];
								for(i = 0; i < print_items.length; ++i) {
									prints.push({
										token: print_items[i].token,
										title: print_items[i].title,
										city: print_items[i].city,
										country: print_items[i].country,
										year: print_items[i].year,
										file: print_items[i].file,
										copies: print_items[i].copies,
										serials: print_items[i].serials,
										desc: print_items[i].desc,
										price: print_items[i].price,
										forsale: print_items[i].forsale
									});
								}
								prints = _.sortByOrder(prints, ['forsale'], ['desc']);
								return reply(prints);
							} else {
								return reply(Boom.badImplementation(err)); // HTTP 500
							}
						});
				} else {
					return reply(Boom.badImplementation(err)); // HTTP 500
				}
			});
		}
	},

	getForSale : {
		handler : function(request, reply) {
			Print.find({ forsale: true }, function(err, items) {
				if (!err) {
					var prints = [];
					for(i = 0; i < items.length; ++i) {
						prints.push({
							token: items[i].token,
							title: items[i].title,
							city: items[i].city,
							country: items[i].country,
							year: items[i].year,
							file: items[i].file,
							copies: items[i].copies,
							serials: items[i].serials,
							desc: items[i].desc,
							price: items[i].price,
							forsale: items[i].forsale
						});
					}
					return reply(prints);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	updateSerials : {
		handler : function(request, reply) {
			Print.find({ token: request.params.token }, function(err, item) {
				if (!err) {
					var index = item.serials.indexOf(request.payload.serial);
					if (index > -1) {
						item.serials.splice(index, 1);
					}
					item.save(function(err){
						if(!err){
							var print = {
								token: item.token,
								title: item.title,
								city: item.city,
								country: item.country,
								year: item.year,
								file: item.file,
								copies: item.copies,
								serials: item.serials,
								desc: item.desc,
								price: item.price,
								forsale: item.forsale
							};
							return reply(print);
						} else {
							return reply('Order failed');
						}
					});
				} else {
					return reply(Boom.badRequest(err)); // HTTP 500
				}
			});
		}
	},

	// private admin
	create : {
		handler : function(request, reply) {
			if (request.payload.secret === 'havana2015admin') {
				Project.findOne({ slug: request.payload.project_slug }, function(err, project) {
					if (!err) {
						generateToken('', function(token) {
							var print = new Print({
								token: token,
								project_id: project._id,
								title: request.payload.title,
								city: request.payload.city,
								country: request.payload.country,
								year: request.payload.year,
								file: request.payload.file,
								copies: request.payload.copies,
								serials: request.payload.serials,
								desc: request.payload.desc,
								price: request.payload.price,
								forsale: request.payload.forsale
							});

							print.save(function(err){
								if(!err){
									return reply(print);
								} else {
									return reply('Create print failed');
								}
							});
						})
					} else {
						return reply(Boom.badRequest(err)); // HTTP 500
					}
				});
			} else {
				return reply(Boom.unauthorized('Wrong secret'));
			}
		}
	}
	
};

module.exports = controller;