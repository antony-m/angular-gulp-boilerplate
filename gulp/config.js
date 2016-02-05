(function() {
    'use strict';

    module.exports = {
        'paths': {
            'app': {
                'src': 'src/app/**/*.*'
            },
            'html': {
                'src': [
                    'src/index.html',
                    'src/app/**/*.tpl.html'
                ]
            },
            'styles': {
                'src': 'src/assets/styles/scss/**/*.scss',
                'main': 'src/assets/styles/scss/app.scss',
                'dest': 'src/assets/styles/css/'
            },
            'scripts': {
                'src': [
                    'src/app/**/*.js',
                    'src/assets/scripts/**/*.js',
                    'src/assets/locales/**/*.js'
                ]
            },
            'images': {
                'src': 'src/assets/images/**/*',
                'dest': 'src/assets/images'
            },
            'symbols': {
                'src': 'src/assets/symbols/**/*',
                'dest': 'src/assets/fonts'
            }
        },
        'injectOrder': {
            'js': [
                '**/app.js',
                'modules/**/*.js',
                'components/**/*.js',
                '**/*.js'
            ]
        },
        'locales': {
            'dest': 'src/assets/locales/',
            'src': 'src/assets/locales/**/*.po'
        }
    };

})();
