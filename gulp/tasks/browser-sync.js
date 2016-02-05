(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var browserSync = require('browser-sync');
    var runSequence = require('run-sequence');
    var config = require('../config.js');
    var url = require('url');
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

        var DEFAULT_FILE = 'index.html';
        var ASSET_EXTENSION_REGEX = new RegExp('\\b(?!\\?)\\.(js|css|png|jpe?g|gif|svg|eot|otf|ttc|ttf|woff2?)\\b(?!\\.)', 'i');

        browserSync({
            notify: true, // Show notification in the browser
            server: {
                baseDir: './src/'
            },
            middleware: function(req, res, next) {
                var fileHref = url.parse(req.url).href;

                if ( !ASSET_EXTENSION_REGEX.test(fileHref) ) {
                    req.url = '/' + DEFAULT_FILE;
                }
                return next();
            },
            port: 4000,
            ui: {
                port: 4001
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
