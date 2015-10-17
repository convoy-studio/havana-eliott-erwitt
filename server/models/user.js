var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

/*
** Schema definition
*/
var userSchema = new mongoose.Schema({
	name: String,
	password: { type: String }
});

/*
** Pre or post methods
*/
userSchema.pre('save', function(next){
	var user = this;

	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(user.password, salt, function(err, hash) {
			user.password = hash;
			next();
		});
	});
});

/*
** Methods
*/
userSchema.methods.comparePassword = function(password, cb) {
	console.log(password);
	console.log(this);
	bcrypt.compare(password, this.password, function(err, isMatch) {
		cb(err, isMatch);
	});
};

module.exports = mongoose.model('User', itemSchema, 'users');