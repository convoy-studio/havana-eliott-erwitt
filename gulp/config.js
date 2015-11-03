const appFolder = './app';
const serverFolder = './server';
const staticFolder = './static';
import serverConfig from '../server/config';

const config = {
	browserSupport : ['last 2 versions', '> 5%'],
	entry : {
		path : appFolder,
		server : './babel.server.js',
		scripts : appFolder + '/js/app.js',
		styles : appFolder + '/css/main.scss'
	},
	webpack : {
		host : 'localhost',
		port : 4242,
		proxy : serverConfig['development'].server.host + ':' + serverConfig['development'].server.port
	},
	watch : {
		server : [serverFolder + '/**/**.js', serverFolder + '/*.js'],
		styles : appFolder + '/css/**/*.scss',
		scripts : appFolder + '/js/**/*.js',
		images : appFolder + '/assets/images/**/*',
		videos : appFolder + '/assets/videos/**/*',
		sitemap : appFolder + '/sitemap.xml',
		robots : appFolder + '/robots.txt',
		fonts : appFolder + '/assets/fonts/**/*',
		json : appFolder + '/data/*.json',
		index : appFolder + '/index.html'
	},
	output : {
		path : staticFolder,
		server : serverFolder + '/server.js',
		filename : 'build',
		publicPath : staticFolder,
		styles : staticFolder + '/css',
		scripts : staticFolder + '/js',
		images : staticFolder + '/assets/images/',
		videos : staticFolder + '/assets/videos/',
		sitemap : staticFolder + '/',
		robots : staticFolder + '/',
		fonts : staticFolder + '/assets/fonts/',
		json : staticFolder + '/data',
		index : staticFolder + '/'
	}
};

export default config;