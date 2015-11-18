import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../config';

gulp.task('videos', () => {
    return gulp.src(config.watch.videos)
        .pipe(changed(config.output.videos))
        .pipe(gulp.dest(config.output.videos));
});