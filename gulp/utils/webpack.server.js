const serverOptions = {
	contentBase: './js/',
	publicPath: '/js/',
	inline: true,
	hot: true,
	stats : false,
	historyApiFallback: true,
	headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
};

export default serverOptions;