'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

function formatStyles() {
  return gulp.src('styles/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('styles'));
}

exports.default = formatStyles;
