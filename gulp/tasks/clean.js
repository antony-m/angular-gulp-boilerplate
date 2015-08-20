(function() {
    'use strict';

    /**
     * Basics
     */
    var gulp = require('gulp');
    var del = require('del');

    /**
     * Clean Output Directory
     */
    gulp.task('clean', function(cb) {
        del([
            '.tmp',
            'www/**'
        ], cb);
    });

})();
