import gulp from 'gulp';

gulp.task('static', () => {
	gulp.start('images');
	gulp.start('videos');
	gulp.start('sitemap');
	gulp.start('fonts');
	// gulp.start('json');
});