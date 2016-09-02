const env = process.env;

const config = {
	server : {
		host : '0.0.0.0',
		port : 3000
	},
	database: {
		host : env.MONGO_HOST || '127.0.0.1',
		port : 27017,
		name : 'havana',
		username : '',
		password : ''
	},
	output: {
		path : './static'
	},
	secret : 'elliotterwitt_convoy'
};

export default config;
