import Boom from 'boom';
import response from '../middlewares/response';
import Calendar from '../models/calendar';
import User from '../models/user';

const controller = {

	getAll : {
		auth: 'token',
		handler : function(request, reply){
			Calendar.find({ privacy: false}, function (err, calendars) {
	            if (!err) {
	                return reply(response(calendars));
	            }
	            return reply(Boom.badImplementation(err)); // HTTP 500
	        });
		}
	},

	getMine: {
		auth: 'token',
		handler : function(request, reply){
			let credentials = request.auth.credentials;

			Calendar.find({ userId: credentials._id}, (err, calendars) => {
				if(!err){
					return reply(response(calendars));
				}
				return reply(Boom.badImplementation(err)); // HTTP 500
			});
		}
	},

	getOne : {
		handler : function(request, reply){
			Calendar.findBySlugWithDays(request.params.slug, function (err, calendar, days) {
	            if (!err) {
	            	let calendarWithDays = {};
	            	calendarWithDays.calendar = calendar;
	            	calendarWithDays.days = days;
	                return reply(response(calendarWithDays));
	            }
	            return reply(Boom.badImplementation(err)); // HTTP 500
	        });
		}
	},

	createOne: {
		auth: 'token',
		handler : function(request, reply){
			let payload = request.payload;
			let credentials = request.auth.credentials;

			const calendar = new Calendar({
				name : payload.name,
				desc : payload.desc,
				userId : credentials._id
			});

			calendar.save(function(err, item){
				if(!err){
					return reply(calendar);
				}
				return reply(Boom.badImplementation(err));
			});
		}
	},

	starOne: {
		auth: 'token',
		handler : function(request, reply){
			let slug = request.params.slug;
			let credentials = request.auth.credentials;

			User.findById(credentials._id, function(error, user){
				if(!error){
					console.log(typeof user.stars);
					if(typeof user.stars !== 'object'){
						user.stars = [];
					}

					if(user.stars.indexOf(slug) == -1){
						user.stars.push(slug);	
					}
					
					user.save(function(err, user){
						if(!err){
							return reply(response(user.stars));
						}else {
							return reply(Boom.badImplementation(err));	
						}
					});
				}else {
					return reply(Boom.badImplementation(error));
				}
			});
		}
	},

	getStarred : {
		auth: 'token',
		handler: function(request, reply){

		}
	}

};

export default controller;