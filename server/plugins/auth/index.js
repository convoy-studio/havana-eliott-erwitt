import authMiddleware from '../../middlewares/auth';
import configs from '../../config';

const env = process.NODE_ENV || 'development';
const config = configs[env];

var validate = function (decodedToken, callback) {
	var error;
	var credentials = decodedToken;
	
	if(!credentials){
		return callback(error, false, {});
	}
    return callback(error, true, credentials)
};

var auth = {
    register: function(server, options, next){
        server.auth.strategy('token', 'jwt', { validateFunc : validate, key: config.secret});
        next();
    }
}

auth.register.attributes = {
    name: 'auth',
    version: '1.0.0'
};

module.exports = auth;