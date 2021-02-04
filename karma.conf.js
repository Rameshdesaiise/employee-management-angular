// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['parallel', 'jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-parallel'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    parallelOptions: {
      executors: 3,
      shardStrategy: 'description-length'
    },
    client:{
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: { random: false } // Don't run tests in random order
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'), 
        reports: ['cobertura'],
      fixWebpackSourcePaths: true,
      thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 72,
          lines: 71,
          branches: 38,
          functions: 59
        },
      },
      verbose: false
    },
    
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ]
      }
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    autoWatchBatchDelay: 50000
  });
};
