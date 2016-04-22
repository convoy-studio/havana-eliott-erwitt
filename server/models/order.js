var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	date: { type: Date, default: Date.now },
	token		: String,
	tracking	: String,
	time		: Number,
	user 		: String,
	state 		: String,
	total		: Number,
    paymentMethod: String,
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
		artist 	: String,
		logistic_id : String
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
	billCountry	: String,
	transactionId: String
});

module.exports = mongoose.model('Order', itemSchema, 'orders');
