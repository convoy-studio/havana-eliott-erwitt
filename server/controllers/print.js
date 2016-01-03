import Boom from 'boom';
import Print from '../models/print';
import Project from '../models/project';
let rand = require('rand-token').uid;
let _ = require('lodash');

function generateToken(hash, callback) {
	let key = rand(6);
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

function getIndexBy(array, name, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][name] == value) {
            return i;
        }
    }
}

const controller = {

	getAll : {
		handler : function(request, reply){
			Print.find({}, function (err, items) {
				if (!err) {
					let prints = [];
					for(let i = 0; i < items.length; ++i) {
						prints.push({
							title: items[i].title,
							city: items[i].city,
							country: items[i].country,
							year: items[i].year,
							file: items[i].file,
							alt: items[i].alt,
							copies: items[i].copies,
							serials: items[i].serials,
							desc: items[i].desc,
							price: items[i].price,
							forsale: items[i].forsale,
							logistic_id: items[i].logistic_id
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
							let project = {
								artist: project_item.artist,
								desc: project_item.desc,
								slug: project_item.slug
							}
							let print = {
								token: print_item.token,
								title: print_item.title,
								city: print_item.city,
								country: print_item.country,
								year: print_item.year,
								file: print_item.file,
								alt: print_item.alt,
								copies: print_item.copies,
								serials: print_item.serials,
								desc: print_item.desc,
								price: print_item.price,
								forsale: print_item.forsale,
								logistic_id: print_item.logistic_id,
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

	getOneForsale : {
		handler : function(request, reply){
			Print.find({ forsale: true }, function(err, print_items) {
				if (!err) {
					let index = getIndexBy(print_items, 'token', request.params.token);
					let prevIndex = (index-1 < 0) ? print_items.length-1 : index-1;
					let nextIndex = (index+1 >= print_items.length) ? 0 : index+1

					// recupérer les infos du projet de la photo
					Project.findById(print_items[index].project_id, function (err, project_item) {
						if (!err) {
							let project = {
								artist: project_item.artist,
								desc: project_item.desc,
								slug: project_item.slug
							}
							let print = {
								token: print_items[index].token,
								title: print_items[index].title,
								city: print_items[index].city,
								country: print_items[index].country,
								year: print_items[index].year,
								file: print_items[index].file,
								alt: print_items[index].alt,
								copies: print_items[index].copies,
								serials: print_items[index].serials,
								desc: print_items[index].desc,
								price: print_items[index].price,
								forsale: print_items[index].forsale,
								prev: print_items[prevIndex].token,
								next: print_items[nextIndex].token,
								logistic_id: print_items[index].logistic_id,
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
			// Print.findOne({ token: request.params.token }, function(err, print_item) {
			// 	if (!err) {
			// 		// recupérer les infos du projet de la photo
			// 		Project.findById(print_item.project_id, function (err, project_item) {
			// 			if (!err) {
			// 				let project = {
			// 					artist: project_item.artist,
			// 					desc: project_item.desc,
			// 					slug: project_item.slug
			// 				}
			// 				let print = {
			// 					token: print_item.token,
			// 					title: print_item.title,
			// 					city: print_item.city,
			// 					country: print_item.country,
			// 					year: print_item.year,
			// 					file: print_item.file,
			// 					copies: print_item.copies,
			// 					serials: print_item.serials,
			// 					desc: print_item.desc,
			// 					price: print_item.price,
			// 					forsale: print_item.forsale,
			// 					project: project
			// 				};
			// 				return reply(print);
			// 			} else {
			// 				return reply(Boom.badImplementation(err)); // HTTP 500
			// 			}
			// 		});
			// 	} else {
			// 		return reply(Boom.badImplementation(err)); // HTTP 500
			// 	}
			// });
		}
	},

	// getByArtist : {
	// 	handler : function(request, reply) {
	// 		Print.find({ slugArtist: request.params.slug })
	// 			 .sort({ year: 'desc'})
	// 			 .exec(function(err, items) {
	// 				if (!err) {
	// 					let result = []
	// 					for(i = 0; i < items.length; i++){
	// 						result.push(items[i]);
	// 					}
	// 					return reply(result);
	// 				}
	// 				return reply(Boom.badImplementation(err)); // HTTP 500
	// 			});
	// 	}
	// },

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
								let prints = [];
								for(let i = 0; i < print_items.length; ++i) {
									prints.push({
										token: print_items[i].token,
										title: print_items[i].title,
										city: print_items[i].city,
										country: print_items[i].country,
										year: print_items[i].year,
										file: print_items[i].file,
										alt: print_items[i].alt,
										copies: print_items[i].copies,
										serials: print_items[i].serials,
										desc: print_items[i].desc,
										price: print_items[i].price,
										forsale: print_items[i].forsale,
										logistic_id: print_items[i].logistic_id
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
					let prints = [];
					for(let i = 0; i < items.length; ++i) {
						prints.push({
							token: items[i].token,
							title: items[i].title,
							city: items[i].city,
							country: items[i].country,
							year: items[i].year,
							file: items[i].file,
							alt: items[i].alt,
							copies: items[i].copies,
							serials: items[i].serials,
							desc: items[i].desc,
							price: items[i].price,
							forsale: items[i].forsale,
							logistic_id: items[i].logistic_id
						});
					}
					return reply(prints);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getUnsold : {
		handler : function(request, reply) {
			Print.find({ forsale: true }, function(err, items) {
				if (!err) {
					let unsold = 0;
					let print, serial;
					for (let i=0; i<items.length; ++i) {
						print = items[i];
						for (let j=0; j<print.serials.length; ++j) {
							serial = print.serials[j];
							if (serial) {
								unsold += print.price;
							}
						}
					}
					return reply(unsold);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	updateSerials : {
		handler : function(request, reply) {
			Print.find({ token: request.params.token }, function(err, item) {
				if (!err) {
					let index = item.serials.indexOf(request.payload.serial);
					if (index > -1) {
						item.serials.splice(index, 1);
					}
					item.save(function(err){
						if(!err){
							let print = {
								token: item.token,
								title: item.title,
								city: item.city,
								country: item.country,
								year: item.year,
								file: item.file,
								alt: item.alt,
								copies: item.copies,
								serials: item.serials,
								desc: item.desc,
								price: item.price,
								forsale: item.forsale,
								logistic_id: item.logistic_id
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
		auth: 'token',
		handler : function(request, reply) {
			if (request.payload.secret === 'havana2015admin') {
				Project.findOne({ slug: request.payload.project_slug }, function(err, project) {
					if (!err) {
						generateToken('', function(token) {
							let print = new Print({
								token: token,
								project_id: project._id,
								title: request.payload.title,
								city: request.payload.city,
								country: request.payload.country,
								year: request.payload.year,
								file: request.payload.file,
								alt: request.payload.alt,
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
	},
	
	// ADMIN
	update : {
		auth: 'token',
		handler : function(request, reply) {
			Print.findOne({ token: request.params.token }, function(err, print) {
				if (!err) {
					print.forsale = request.payload.print.forsale;
					print.title = request.payload.print.title;
					print.city = request.payload.print.city;
					print.country = request.payload.print.country;
					print.year = request.payload.print.year;
					print.price = request.payload.print.price;
					print.save(function(err){
						if(!err){
							return reply(print);
						} else {
							return reply('Update print failed');
						}
					});
				} else {
					return reply(Boom.badRequest(err)); // HTTP 500
				}
			});
		}
	}
};

module.exports = controller;