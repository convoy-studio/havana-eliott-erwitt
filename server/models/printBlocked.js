var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	print_token: { type: String, index: true },
	serial: Number,
	created_at: { type: Date, expires: '15m', default: Date.now } // record will be deleted after 15 minutes
});

module.exports = mongoose.model('PrintBlocked', itemSchema, 'printBlocked');
