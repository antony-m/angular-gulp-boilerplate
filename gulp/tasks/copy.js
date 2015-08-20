(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var config = require('../config.js');
    var $ = {};

    /**
     * Plugins
     */

    /**
     * Copy files from app to www for production
     */
    gulp.task('copy:app', function() {
        // First level
        gulp.src([
                'app/*.*',
                '!app/styles'
            ])
            .pipe(gulp.dest('www'));

        gulp.src([
                'app/**/*',
                '!app/styles/**'
            ])
            .pipe(gulp.dest('www/styles'));
    });

    gulp.task('copy:all', function() {
        // First level
        gulp.src([
            'app/*.*'
        ])
            .pipe(gulp.dest('www'));

        gulp.src([
            'app/styles/**'
        ])
            .pipe(gulp.dest('www/styles'));

        gulp.src([
            'app/vendors/**'
        ])
            .pipe(gulp.dest('www/vendors'));

        gulp.src([
            'app/**'
        ])
            .pipe(gulp.dest('www'));
    });

})();
