import User from '../models/user';
import response from '../middlewares/response';
import authMiddleware from '../middlewares/auth';

const controller = {

	login : {
		handler : function(request, reply){
			const payload = request.payload.user;

			User.findOne({
				email : payload.email
			}, function(error, user){
				if(error){
					console.log('Login Error');
					console.log(error);
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

						const token = authMiddleware.createToken(request, user);

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
				name : payload.name,
				email : payload.email,
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
	},

	signupWithFacebook : {
		auth : 'facebook',
		handler : function(request, reply){
			return reply.redirect('/calendars');
		}
	},

	signupWithTwitter : {
		auth : 'twitter',
		handler : function(request, reply){
			return reply.redirect('/calendars');
		}
	}

};

export default controller;