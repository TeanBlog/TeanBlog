'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');

gulp.task('less', () => {
  gulp.src([ 'app/public/_less/**/*.less', '!app/public/_less/tean/theme/**' ])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rev())
    .pipe(rev.manifest())
    .pipe(gulp.dest('app/public/css/rev'))
    .pipe(gulp.dest('app/public/css'));
});

gulp.task('rev', function() {
  gulp.src([ 'app/public/css/rev/*.json', 'app/view/**/*.tpl' ])
    .pipe(revCollector())
    .pipe(gulp.dest('app/view/'));
});

gulp.task('auto', () => {
  gulp.watch('app/public/_less/**/*.less', [ 'less' ]);
});

gulp.task('default', [ 'less', 'auto', 'rev' ]);
