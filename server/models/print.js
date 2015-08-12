var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	copies : Number,
	price : Number,
	desc : String,
	artist : String,
	city : String,
	year : String
});

module.exports = mongoose.model('Print', itemSchema, 'prints');