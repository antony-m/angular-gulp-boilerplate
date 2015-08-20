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
    $.angularTemplatecache = require('gulp-angular-templatecache');
    $.minifyHtml = require('gulp-minify-html');

    /**
     * Generate templates caches from html and minify them
     */
    gulp.task('generate-templates', function() {
        return gulp
            .src('dev/app/**/*.tpl.html')
            .pipe($.minifyHtml({empty: true}))
            .pipe($.angularTemplatecache(
                'templates.js',
                {
                    'module': 'app',
                    'root': '/app/',
                    'standAlone': false
                }
            ))
            .pipe(gulp.dest('dev/app/'));
    });

})();
