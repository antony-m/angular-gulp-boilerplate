(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var browserSync = require('browser-sync');
    var historyApiFallback = require('connect-history-api-fallback');
    var runSequence = require('run-sequence');
    var config = require('../config.js');
    var $ = {};

    /**
     * Plugins
     */
    $.watch = require('gulp-watch');

    /**
     * Build arrays for watchers
     */
    var generateTemplateWatchers = config.paths.html.src.concat(config.paths.images.src);
    var stylesWatchers = config.paths.styles.src;
    var jsWatchers = config.paths.scripts.src;

    /**
      * Setup a local node server
      * Watch Files For Changes & Reload
      */
    gulp.task('browser-sync', function() {
        browserSync({
            notify: true, // Show notification in the browser
            server: {
                baseDir: './dev/',
                middleware: [ historyApiFallback ]
            },
            port: 5000,
            ui: {
                port: 5001
            }
        });
		
		$.watch(generateTemplateWatchers, function() {
            runSequence('generate-templates', browserSync.reload);
        });

        $.watch(stylesWatchers, function() {
            runSequence('styles', browserSync.reload);
        });
        $.watch(jsWatchers, function() {
            runSequence('jshint', 'generate-templates', 'inject-js', browserSync.reload);
        });
    });

})();
