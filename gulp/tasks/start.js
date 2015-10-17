import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import config from '../config';
import options from '../options';

gulp.task('start', () => {
	nodemon({
	    script: config.entry.server,
	  	env: { 'NODE_ENV': 'development'}
  	});
});