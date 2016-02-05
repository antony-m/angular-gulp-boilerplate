
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'src/vendors/angular/angular.js',
      'src/vendors/angular-resource/angular-resource.js',
      'src/vendors/ui-router/release/angular-ui-router.js',
      'src/vendors/angular-mocks/angular-mocks.js',
      'src/app/*.js',
      'src/app/**/*.js',
      'spec/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    plugins:[
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    singleRun: false
  })
};
