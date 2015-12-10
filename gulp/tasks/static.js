import gulp from 'gulp';

gulp.task('static', () => {
	gulp.start('images');
	gulp.start('videos');
	gulp.start('vendors');
	gulp.start('sitemap');
	gulp.start('robots');
	gulp.start('fonts');
	// gulp.start('json');
});