'use strict';

let eslint = require('gulp-eslint');
let gulp = require('gulp');
let htmlhint = require('gulp-htmlhint');

let paths = {
  eslintrc: ['.eslintrc'],
  html: ['src/**/*.html'],
  htmlhintrc: ['.htmlhintrc'],
  js: ['src/**/*.js', 'gulpfile.js']
};

gulp.task('default', ['watch']);
gulp.task('test', ['eslint', 'htmlhint']);

gulp.task('eslint', function() {
  gulp.src(paths.js)
    .pipe(eslint(paths.eslintrc))
    .pipe(eslint.format());
});

gulp.task('htmlhint', function() {
  gulp.src(paths.html)
    .pipe(htmlhint(paths.htmlhintrc))
    .pipe(htmlhint.reporter());
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['eslint']);
  gulp.watch(paths.html, ['htmlhint']);
});
