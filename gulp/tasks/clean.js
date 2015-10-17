import gulp from 'gulp';
import rm from 'rimraf';
import config from '../config';

gulp.task('clean', () => {
	rm.sync(config.output.path);
});