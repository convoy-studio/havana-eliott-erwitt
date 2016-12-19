const env = process.env;

const config = {
	server : {
		host : '127.0.0.1',
		port : 3000
	},
	database: {
		host : env.MONGO_HOST || '127.0.0.1',
		port : 27017,
		name : env.MONGO_DATABASE || 'havana',
		username : env.MONGO_USERNAME || '',
		password : env.MONGO_PASSWORD || ''
	},
	output: {
		path : './static'
	},
	secret : 'elliotterwitt_convoy',

	prestashop: {
		languages: {
			'en': 1,
			'es': 2
		},

		frontend: {
			url: env.PRESTASHOP_FRONTEND_URL || 'https://your-prestashop-domain'
		},

		client: {
			webservice: {
				key: env.PRESTASHOP_WEBSERVICE_KEY || 'your-prestashop-webservice-key',
				scheme: env.PRESTASHOP_WEBSERVICE_SCHEME || 'https',
				host: env.PRESTASHOP_WEBSERVICE_HOST || 'localhost',
				root: env.PRESTASHOP_WEBSERVICE_ROOT || '/api'
			}
		}
	},

    mandrill: {
        key: env.MANDRILL_API_KEY
    }
};

export default config;
