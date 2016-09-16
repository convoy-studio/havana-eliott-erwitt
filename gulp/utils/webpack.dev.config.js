import path from 'path';
import webpack from 'webpack';
import config from '../config';

const webpackConfig = {
	target: 'web',
	devtool: 'eval-source-map',
	entry: [
		'webpack/hot/only-dev-server',
  		'webpack-dev-server/client?http://'+ config.webpack.host + ':' + config.webpack.port,
  		config.entry.scripts
	],
	output: {
		path: path.join(process.cwd(), '/static'),
	    pathInfo: true,
	    filename: config.output.filename + '.js',
	    publicPath: 'http://' + config.webpack.host + ':' + config.webpack.port + '/js/'
  	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		modulesDirectories: [
			'node_modules',
			'src'
		],
		extentions: ['js', 'jsx']
	},
	module: {
		loaders: [
			{ 
				test: /\.js?$/,
				loaders: ['react-hot', 'babel?stage=1'],
				exclude : /node_modules/
			}
        ]
	}
};

export default webpackConfig;

// vim: ts=2 sts=2 sw=2 noet
