import jwt from 'jsonwebtoken';
import configs from '../config';

const env = process.env.NODE_ENV || 'development';
const config = configs[env];

const authHelper = {

	createToken(request, user){
		const token = jwt.sign(user, config.secret, {
			expiresInMinutes : 43200
		});

		return token;
	},

	tokenIsValid(token){
		jwt.verify(token, config.secret, function(err, decoded) { 
      		if(err){
        		return false;    
  			}
  			return true;
    	});
	}
};

export default authHelper;