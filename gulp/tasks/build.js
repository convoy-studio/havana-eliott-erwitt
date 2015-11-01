import gulp from 'gulp';
import watch  from 'gulp-watch';
import uglify from 'gulp-uglify';
import minifyCss from 'gulp-minify-css';
import livereload from 'gulp-livereload';

import options from '../options';
import config from '../config';

gulp.task('build', ['clean', 'sass', 'static'], () => {
	if (options.watch) {
		// livereload.listen();
		//Styles
		watch(config.watch.styles, function(){
			gulp.start('sass');
		});
		//Images
		watch(config.watch.images, function(){
			gulp.start('images');
		});
		//Videos
		watch(config.watch.videos, function(){
			gulp.start('videos');
		});
		//Sitemap
		watch(config.watch.sitemap, function(){
			gulp.start('sitemap');
		});
		//Fonts
		watch(config.watch.fonts, function(){
			gulp.start('fonts');
		});
		//Index
		watch(config.watch.index, function(){
			gulp.start('html');
		});
		//Json
		// watch(config.watch.json, function(){
		// 	gulp.start('json');
		// });
	}

  	if (options.minify) {
    	gulp.src(config.output.styles + '/' + config.output.filename + '.css')
			.pipe(minifyCss())
			.pipe(gulp.dest(config.output.styles));
  	}

  	// gulp.start('webpack');
});