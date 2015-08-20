(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var config = require('../config.js');
    var $ = {};

    /**
     * Gulp plugins
     */
    $.cache = require('gulp-cache');
    $.imagemin = require('gulp-imagemin');
    $.size = require('gulp-size');


    /**
     * Optimize Images
     */
    gulp.task('images', function() {
        return gulp.src(config.paths.images.src)
            .pipe($.cache($.imagemin({
                optimisationLevel: 6, // png
                progressive: true, // jpg
                interlaced: true // gif
            })))
            .pipe(gulp.dest(config.paths.images.dest))
            .pipe($.size({
                title: 'images'
            }));
    });
})();
