(function() {
    'use strict';

    module.exports = {
        'browsers': [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ],
        'paths': {
            'app': {
                'src': 'dev/app/**/*.*'
            },
            'html': {
                'src': [
                    'dev/index.html',
                    'dev/app/**/*.tpl.html'
                ]
            },
            'styles': {
                'src': 'dev/assets/styles/scss/**/*.scss',
                'main': 'dev/assets/styles/scss/app.scss',
                'dest': 'dev/assets/styles/css/'
            },
            'scripts': {
                'src': [
                    'dev/app/**/*.js',
                    'dev/assets/scripts/**/*.js'
                ]
            },
            'images': {
                'src': 'dev/assets/images/**/*',
                'dest': 'dev/assets/images'
            },
            'symbols': {
                'src': 'dev/assets/symbols/**/*',
                'dest': 'dev/assets/fonts'
            }
        },
        'injectOrder': {
            'js': [
                '**/app.js',
                '**/*.js',
            ]
        }
    };

})();
