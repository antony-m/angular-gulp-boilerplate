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
    $.inject = require('gulp-inject');
    $.order = require('gulp-order');

    /**
     * Inject needed files into index.html (app & templates)
     */
    gulp.task('inject-js', function() {

        gulp.src('src/index.html')
            .pipe(
                $.inject(gulp.src(config.paths.scripts.src[0])
                            .pipe($.order(config.injectOrder.js)), {
                        'ignorePath': 'src',
                        'read': false,
                        'relative': false
                    }))
            .pipe(gulp.dest('src/'));
    });

})();
