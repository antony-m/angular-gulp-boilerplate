(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var $ = {};

    /**
     * Gulp plugins
     */
    $.minifyCss = require('gulp-minify-css');
    $.minifyHtml = require('gulp-minify-html');
    $.usemin = require('gulp-usemin');
    $.uglify = require('gulp-uglify');
    $.rev = require('gulp-rev');

    /**
     * Concat, uglify files for production
     */
    gulp.task('usemin', function() {
        gulp.src('src/index.html')
            .pipe($.usemin({
                css: [$.minifyCss(), 'concat', $.rev()],
                html: [$.minifyHtml({empty: true})],
                jsVendors: [$.uglify(), $.rev()],
                jsApp: [$.uglify(), $.rev()]
            }))
            .pipe(gulp.dest('www/'));
    });

})();
