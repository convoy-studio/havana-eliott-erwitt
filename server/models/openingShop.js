var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	mail : String
});

module.exports = mongoose.model('OpeningShop', itemSchema, 'openingShops');