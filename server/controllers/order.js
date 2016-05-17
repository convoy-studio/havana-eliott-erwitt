import Order from '../models/order';
import Print from '../models/print';
var Boom = require('boom');
// var Order = require('../models/order');
import { uid } from 'rand-token';
import getAmountSupply from '../../common/shiiping';

function generateToken(hash, callback) {
	let key = uid(4, '0123456789');
	if ( key != hash ) {
		Print.find({ token: key }, function(err, prints) {
			if ( prints.length == 0 ) {
				callback(key);
				return;
			}
			generateToken(hash);
		});
	} else {
		generateToken(hash);
	}
}

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
			Order.find({ state: 'Nouvelle commande', transactionId: { $exists: true } }, function (err, items) {
				if (!err) {
					return reply(items);
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getDelivered : {
		handler : function(request, reply){
			Order.find({ state: 'Commande expédiée' }, function (err, items) {
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

	updateOrder : {
		handler : function(request, reply) {
			Order.findById(request.params.id, function(err, item) {
				if (!err) {
					item.state = request.payload.state;
					item.tracking = request.payload.tracking;
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
		handler : function(request, reply) {
            const prints = request.payload.prints;
            const printsSerials = {};
            const printsToken = prints.reduce(function (result, print) {
                result.push(print.token);
                if (!printsSerials[print.token]) {
                    printsSerials[print.token] = 1;
                } else {
                    ++printsSerials[print.token];
                }

				return result;
            }, []);

            Print.find({ token: { $in: printsToken } }, function(err, dbPrints) {
                let total = dbPrints.reduce(function (total, print) {
        			return total += print.price * printsSerials[print.token];
        		}, 0);

                const country = request.payload.country;
                total += getAmountSupply(country, prints.length);
				total = total.toFixed(2);

                generateToken('', function(token) {
                    var order = new Order({
                        // time : new Date().getTime(),
                        token: 'EEHC7F_' + token,
                        user: request.payload.user,
                        prints: prints,
                        total: total,
                        paymentMethod: request.payload.paymentMethod,
                        state : 'Nouvelle commande',

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
                })
            });
		}
	},

	generatePdf : {
		handler : function(request, reply) {

			return reply('pdf');

		}
	}

};

module.exports = controller;
