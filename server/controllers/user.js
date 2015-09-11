var Boom = require('boom');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var env = process.NODE_ENV || 'development';
var config = require('../config')[env];
var _ = require('lodash');

function createToken(user) {
	return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });
}

var controller = {

	createSession : {
		handler : function(request, reply){
			console.log(request)
			if (!request.payload.username || !request.payload.password) {
				// return res.status(400).send("You must send the username and the password");
				return reply(Boom.badRequest('You must send the username and the password')); // 400
			}

			// var user = _.find(users, {username: request.payload.username});
			// var user = User.findOne({ username: request.payload.username });

			User.findOne({ username: request.payload.username }, function (err, user) {
				if (!user) {
					// return res.status(401).send("The username or password don't match");
					return reply(Boom.unauthorized('The username or password don\'t match')); // HTTP 401
				}

				console.log(user.password, request.payload.password)
				if (user.password !== request.payload.password) {
					// return res.status(401).send("The username or password don't match");
					return reply(Boom.unauthorized('The username or password don\'t match 2')); // HTTP 401
				}

				// res.status(201).send({
				// 	id_token: createToken(user)
				// });
				return reply({
					id_token: createToken(user)
				});
			});


		}
	},

	getOne : {
		handler : function(request, reply){
			Artist.findOne({ slug: request.params.slug })
				.populate('project')
				.exec(function (err, item) {
					if (!err) {
						var artist = {
							name : item.name,
							bio : item.bio,
							photo : item.photo,
							project : {
								title : item.project.title,
								desc : item.project.desc
							}
						};
						return reply(artist);
					}
					return reply(Boom.badImplementation(err)); // HTTP 500
				});
		}
	}
	
};

module.exports = controller;