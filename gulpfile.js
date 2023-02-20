/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) 2021-present Kaleidos Ventures SL
 */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
  coffee: 'coffee/*.coffee',
  dist: 'dist/'
};

gulp.task('copy-config', function () {
  return gulp.src('profit-well.json')
    .pipe(gulp.dest(paths.dist));
});

gulp.task('compile-coffee', function () {
  return gulp.src(paths.coffee)
    .pipe($.plumber())
    .pipe($.cached('coffee'))
    .pipe($.coffee())
    .pipe($.remember('coffee'))
    .pipe($.concat('profit-well.js'))
    .pipe($.uglify({ mangle: false, annotations: false }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function () {
  gulp.watch([paths.coffee], gulp.parallel('compile-coffee'));
});

gulp.task('default', gulp.series('copy-config', 'compile-coffee', 'watch'));

gulp.task('build', gulp.series('copy-config', 'compile-coffee'));
