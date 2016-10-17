import path from 'path';
import webpack from 'webpack';
import config from '../config';

const webpackConfig = {
	target: 'web',
	entry: config.entry.scripts,
	output: {
		path: './static/js',
	    pathInfo: true,
	    filename: config.output.filename + '.js',
	    publicPath: '/static/js/'
  	},
	resolve: {
		modulesDirectories: [
			'node_modules',
			'src'
		],
		extentions: ['js', 'jsx']
	},
	plugins : [
		new webpack.DefinePlugin({
			'process.env': {
				PRESTASHOP_FRONTEND_URL: env.PRESTASHOP_FRONTEND_URL,
			},
		}),
		new webpack.optimize.UglifyJsPlugin({ output: {comments: false} })
	],
	module: {
		loaders: [
			{ 
				test: /\.js?$/,
				loaders: ['babel'],
				exclude : /node_modules/
			}
        ]
	}
};

export default webpackConfig;
