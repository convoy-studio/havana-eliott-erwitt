var mongoose = require('mongoose');
var Artist = require('./artist');
var Project = require('./project');

var itemSchema = new mongoose.Schema({
	slugArtist	: String,
	desc 		: String,
	price 		: Number,
	city 		: String,
	year 		: String,
	file		: String,
	copies		: Number,
	serials		: [Number]
});

module.exports = mongoose.model('Print', itemSchema, 'prints');