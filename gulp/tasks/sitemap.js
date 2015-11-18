import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../config';

gulp.task('sitemap', () => {
    return gulp.src(config.watch.sitemap)
        .pipe(changed(config.output.sitemap))
        .pipe(gulp.dest(config.output.sitemap));
});