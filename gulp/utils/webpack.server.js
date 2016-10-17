const env = process.env;

let headers = {
	'Access-Control-Allow-Origin': 'http://localhost:3000',
	'Access-Control-Allow-Headers': 'X-Requested-With',
};

if (env.WEBPACK_SERVER_PROXY) {
	headers['Access-Control-Allow-Origin'] = 'http://' + env.WEBPACK_SERVER_PROXY;
}

const serverOptions = {
	contentBase: './js/',
	publicPath: '/js/',
	inline: true,
	hot: true,
	stats : false,
	historyApiFallback: true,
	headers: headers,
};

export default serverOptions;
