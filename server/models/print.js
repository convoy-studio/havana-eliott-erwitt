var mongoose = require('mongoose');
var Project = require('./project');

var itemSchema = new mongoose.Schema({
	token		: String,
	project_id	: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
	title 		: String,
	city 		: String,
	country 	: String,
	year 		: Number,
	file		: String,
	copies		: Number,
	serials		: [Boolean],
	forsale		: Boolean,
	desc 		: String,
	price 		: Number,
	alt			: String
});

module.exports = mongoose.model('Print', itemSchema, 'prints');