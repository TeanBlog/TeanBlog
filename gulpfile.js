'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('less', () => {
  gulp.src([ 'app/public/_less/**/*.less', '!app/public/_less/tean/theme/**' ])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/public/css'));
});

gulp.task('es6', () => {
  gulp.src([ 'app/public/_es6/**/*.js' ])
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('app/public/js'));
});

gulp.task('auto', () => {
  gulp.watch('app/public/_less/**/*.less', [ 'less' ]);
  gulp.watch('app/public/_es6/**/*.js', [ 'es6' ]);
});

gulp.task('default', [ 'less', 'es6', 'auto' ]);
