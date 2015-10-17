import Boom from 'boom';
import User from '../models/user';

const controller = {

	getAll : {
		handler : function(request, reply){
			User.find({}, function (err, users) {
	            if (!err) {
	                return reply(users);
	            }
	            return reply(Boom.badImplementation(err)); // HTTP 500
	        });
		}
	},

	getOne : {
		handler : function(request, reply){
			User.findOne({ 'userId': request.params.userId }, function (err, user) {
	            if (!err) {
	                return reply(user);
	            }
	            return reply(Boom.badImplementation(err)); // HTTP 500
	        });
		}
	}

};

export default controller;