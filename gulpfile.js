(function() {
    'use strict';

    /**
     * Include Gulp & Tools
     */
    var gulp = require('gulp');
    var requireDir = require('require-dir');
	var runSequence = require('run-sequence');
    var Server = require('karma').Server;

    /**
     * Load all gulp tasks
     */
    var tasks = requireDir('./gulp/tasks', { recurse: true });

    /**
     * Task: 'gulp build'
     */
    gulp.task('build', ['clean'], function(){
        runSequence(
            'styles',
			'generate-templates',
            'inject-js',
            'jshint',
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
            'copy:app',
            'jshint',
            'usemin'
        );
    });

    /**
     * Task: 'gulp test'
     * Run test once and exit
     */
    gulp.task('test', function(done) {
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });

    /**
     * Task: 'gulp tdd'
     * Watch for file changes and re-run tests on each change
     */
    gulp.task('tdd', function(done) {
        new Server({
            configFile: __dirname + '/karma.conf.js'
        }, done).start();
    });

})();
