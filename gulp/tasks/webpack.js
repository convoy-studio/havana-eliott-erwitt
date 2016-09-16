import gulp from 'gulp';
import options from '../options';
import config from '../config';
import webpack from 'webpack';

gulp.task('webpack', () => {
	if(options.watch){
		var webpackConfig = require('../utils/webpack.dev.config');
		var WebpackDevServer = require('webpack-dev-server');
		var webpackServerOptions = require('../utils/webpack.server');

		var server = new WebpackDevServer(webpack(webpackConfig), webpackServerOptions);
		server.listen(config.webpack.port, config.webpack.host, function (err, result) {
			if (err) {
		 		console.log(err);
			}
			console.log('Listening at ' + config.webpack.host + ':' + config.webpack.port);
		});
	}else {
		var webpackConfig = require('../utils/webpack.prod.config');

		return new Promise((resolve, reject) => {
			webpack(webpackConfig, function(error) {
				if (error) {
					console.log('webpack build failed');
					return reject(error);
				}
				console.log('webpack build complete');
				resolve();
			});
		});
	}
});
