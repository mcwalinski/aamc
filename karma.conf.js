module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'src/**/*.html'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
      'src/**/!(*.mock|*.spec).js': ['coverage']
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'src/',
      // create a single module that contains templates from all the files
      moduleName: 'templates'
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      // output coverage reports
      dir : 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};