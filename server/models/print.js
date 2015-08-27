var mongoose = require('mongoose');
var Artist = require('./artist');
var Project = require('./project');

var itemSchema = new mongoose.Schema({
	slugArtist	: String,
	desc 		: String,
	price 		: Number,
	title 		: String,
	city 		: String,
	country 	: String,
	year 		: String,
	file		: String,
	copies		: Number,
	serials		: [Boolean],
	forSale		: Boolean
});

module.exports = mongoose.model('Print', itemSchema, 'prints');