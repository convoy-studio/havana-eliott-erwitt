var mongoose = require('mongoose');
var Project = require('./project');

var itemSchema = new mongoose.Schema({
	name 	: String,
	slug 	: String,
	bio 	: String,
	photo	: String,
	project : {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
});

module.exports = mongoose.model('Artist', itemSchema, 'artists');