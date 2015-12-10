import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../config';

gulp.task('vendors', () => {
    return gulp.src(config.watch.vendors)
        .pipe(changed(config.output.vendors))
        .pipe(gulp.dest(config.output.vendors));
});