var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	username 	: String,
	password 	: String
});

module.exports = mongoose.model('User', itemSchema, 'users');