(function() {
    'use strict';

    /**
     * Include Gulp & Tools
     */
    var gulp = require('gulp');
    var requireDir = require('require-dir');
	var runSequence = require('run-sequence');
    var $ = {};

    /**
     * Get some configuration files
     */
    var config = require('./gulp/config.js');

    /**
     * Load all gulp taks
     */
    var tasks = requireDir('./gulp/tasks', { recurse: true });

    /**
     * Task: 'default'
     * List all available tasks
     */
    gulp.task('default', $.taskListing);

    /**
     * Task: 'help'
     * List all available tasks
     */
    gulp.task('help', $.taskListing);

    /**
     * Task: 'gulp build'
     */
    gulp.task('build', ['clean'], function(){
        runSequence(
            'styles',
			'generate-templates',
            'inject-js',
            ['browser-sync']
        );
    });

    /**
     * Task: 'gulp deploy'
     */
    gulp.task('deploy', ['clean'], function() {

            runSequence(
                'styles',
				'generate-templates',
                'inject-js',
                'copy:all'
            );
    });

})();
