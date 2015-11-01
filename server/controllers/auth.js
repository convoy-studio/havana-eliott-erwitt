import User from '../models/user';
import response from '../middlewares/response';
import authMiddleware from '../middlewares/auth';

const controller = {

	login : {
		handler : function(request, reply){
			// const payload = request.payload.user;
			// console.log(payload);

			User.findOne({
				// identifiant : payload.identifiant
				identifiant : request.payload.identifiant
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
					user.comparePassword(request.payload.password, function(error, isMatch){
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
				identifiant : payload.identifiant,
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

export default controller;