import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../config';

gulp.task('robots', () => {
    return gulp.src(config.watch.robots)
        .pipe(changed(config.output.robots))
        .pipe(gulp.dest(config.output.robots));
});