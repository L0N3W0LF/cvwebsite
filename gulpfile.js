'use strict';

var eslint = require('gulp-eslint');
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');

var paths = {
  eslintrc: ['.eslintrc'],
  html: ['index.html'],
  htmlhintrc: ['.htmlhintrc'],
  js: ['js/**/*.js', 'gulpfile.js']
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
