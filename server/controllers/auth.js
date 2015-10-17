var Boom = require('boom');
var User = require('../models/user');
import authHelper from '../helpers/auth';

var controller = {

	login : {
		handler : function(request, reply){
			const payload = request.payload.user;

			User.findOne({
				name : payload.username
			}, function(error, user){
				if(error){
					const response = {
						success : true,
						message : 'Error'
					};
					return reply(response);
				}

				if(!user){
					console.log('User couldnt be found');
					console.log(error);
					const response = {
						success : false,
						message : 'Login failed'
					};
					return reply(response);
				} else if(user){
					user.comparePassword(payload.password, function(error, isMatch){
						if(!isMatch){
							const res = {
								success : false,
								message : 'Wrong password'
							};
							return reply(res);
						}

						const token = authHelper.createToken(request, user);

						const res = {
							message : 'Login Success',
							user: user,
							token: token
						};
						return reply(response(res));
					});
				}
			});
		}
	},

	signup : {
		handler : function(request, reply){
			const payload = request.payload.user;

			const user = new User({
				name : payload.username,
				password: payload.password
			});

			user.save(function(error){
				if(error){
					console.log('User couldnt be saved');
					console.log(error);
					return reply('Signup failed');
				}
				return reply(user);
			});
		}
	}

};

module.exports = controller;