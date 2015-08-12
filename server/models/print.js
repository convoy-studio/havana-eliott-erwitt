var mongoose = require('mongoose');
var Artist = require('./artist');
var Project = require('./project');

var itemSchema = new mongoose.Schema({
	slugArtist	: String,
	// artist 	: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
	// project : {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
	desc 	: String,
	price 	: Number,
	city 	: String,
	year 	: String,
	file	: String,
	copies 	: Number
});

module.exports = mongoose.model('Print', itemSchema, 'prints');