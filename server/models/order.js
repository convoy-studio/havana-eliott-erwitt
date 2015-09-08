var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	time	: Number,
	user 	: String,
	state 	: String,
	prints	: [{ printId: String, serial: Number }]
});

module.exports = mongoose.model('Order', itemSchema, 'orders');