// Karma configuration
// Generated on Wed Nov 18 2015 08:21:09 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'carousel/static/carousel/js',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'lib/**/*.js', included: false },
      {pattern: '../../../templates/carousel/**/*.html', included: true },
      'tests/addTemplates.js',
      {pattern: 'models/**/*.js', included: false },
      {pattern: 'collections/**/*.js', included: false },
      {pattern: 'views/**/*.js', included: false },
      {pattern: 'tests/**/*Spec.js', included: false },
      'tests/main-test.js'
    ],


    // list of files to exclude
    exclude: [
      'main.js',
      'carousel.js',
      '../../../templates/carousel/carousel.html'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../../../templates/carousel/**/*.html':['html2js']
    },

    proxies: {
      '/static/carousel/images/*': 'http://127.0.0.1:8000/static/carousel/images/*',
      '/test_images/*': 'http://127.0.0.1:8000/static/carousel/test_images/*'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
