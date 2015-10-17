var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	artist 	: String,
	slug	: String,
	desc 	: [String],
	priority: Number
});

module.exports = mongoose.model('Project', itemSchema, 'projects');