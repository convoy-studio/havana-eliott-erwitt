var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	token		: String,
	tracking	: String,
	time		: Number,
	user 		: String,
	state 		: String,
	total		: Number,
	prints		: [{
		// printId: String,
		token	: String,
		title	: String,
		city 	: String,
		country : String,
		year 	: Number,
		price 	: String,
		serial 	: Number,
		file 	: String,
		artist 	: String
	}],
	mail	 	: String,
	firstname 	: String,
	lastname 	: String,
	phone		: String,
	address		: String,
	zip			: String,
	city		: String,
	country		: String,
	billFirstname : String,
	billLastname : String,
	billPhone	: String,
	billAddress	: String,
	billZip		: String,
	billCity	: String,
	billCountry	: String
});

module.exports = mongoose.model('Order', itemSchema, 'orders');