(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var browserSync = require('browser-sync');
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
            .src('src/app/**/*.tpl.html')
            .pipe($.minifyHtml({empty: true}))
            .pipe($.angularTemplatecache(
                'templates.js',
                {
                    'module': 'app',
                    'root': '/app/',
                    'standAlone': true
                }
            ))
            .pipe(gulp.dest('src/app/'))
            .pipe(browserSync.stream());
    });

})();
