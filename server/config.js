const configDev = require('./config/development');
const configProd = require('./config/production');

const config = {
	'development' : configDev,
	'production' : configProd
};

export default config;