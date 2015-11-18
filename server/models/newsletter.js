var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	mail : String
});

module.exports = mongoose.model('Newsletter', itemSchema, 'newsletters');