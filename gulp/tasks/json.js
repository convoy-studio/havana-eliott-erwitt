import gulp from 'gulp';
import options from '../options';
import config from '../config';
import util from 'gulp-util';
import jsoncombine from 'gulp-jsoncombine';

gulp.task('json', () => {
	gulp.src(config.watch.json)
		.pipe(jsoncombine(config.output.filename + '.json',function(data){
			return new Buffer(JSON.stringify(data));
		}))
		.pipe(gulp.dest(config.output.json));
});