var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	title 	: String,
	desc 	: [String]
});

module.exports = mongoose.model('Project', itemSchema, 'projects');