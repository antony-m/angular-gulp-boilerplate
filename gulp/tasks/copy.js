(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var config = require('../config.js');

    /**
     * Copy files from app to www for production
     */
    gulp.task('copy:app', function() {
        // First level
        gulp.src([
                'src/*.*',
                '!src/assets'
            ])
            .pipe(gulp.dest('www'));

        gulp.src([
                'src/assets/**/*',
                '!src/assets/styles/**',
                '!src/assets/scripts/**'
            ])
            .pipe(gulp.dest('www/assets'));
    });

    gulp.task('copy:all', function() {

        gulp.src([
            'src/*.*'
        ])
            .pipe(gulp.dest('www'));

        gulp.src([
            'src/assets/**'
        ])
            .pipe(gulp.dest('www/assets'));

        gulp.src([
            'src/vendors/**'
        ])
            .pipe(gulp.dest('www/vendors'));

        gulp.src([
            'src/app/**'
        ])
            .pipe(gulp.dest('www/app'));
    });

})();
