'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

function formatStyles() {
  return gulp.src('styles/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('styles'));
}

function watch() {
  return gulp.watch('styles/*.scss', formatStyles);
}

exports.default = formatStyles;
exports.formatStyles = formatStyles;
exports.watch = watch;
exports.buildAndWatch = gulp.series(formatStyles, watch);
