import gulp from 'gulp';
import options from '../options';
import config from '../config';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import errorHandler from '../utils/error-handler';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer-core';
import mqpacker from 'css-mqpacker';
import rename from 'gulp-rename';
import livereload from 'gulp-livereload';

gulp.task('sass', () => {
  gulp.src(config.entry.styles)
    .pipe(plumber())
    // Add sourcemaps if we are in debug mode.
    .pipe(options.debug ? sourcemaps.init() : util.noop())
    // .pipe(sass({'include css': true}))
    .pipe(sass())
    .on('error', errorHandler)
    .pipe(postcss([
      autoprefixer({browsers: config.browserSupport}),
      mqpacker
    ]))
    .pipe(options.debug ? sourcemaps.write() : util.noop())
    .pipe(rename(config.output.filename + '.css'))
    .pipe(gulp.dest(config.output.styles))
    .pipe(options.debug ? livereload({host: 'localhost', port: 35000}) : util.noop());
});