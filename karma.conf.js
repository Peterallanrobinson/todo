const webpackConfig = require('./webpack.config');

const suppressSkipped = process.env['HIDE_SKIPPED_TESTS'] === 'true' || process.argv.includes('--no-skipped');
const suppressLogged = process.env['HIDE_TEST_LOGS'] === 'true' ? false : (process.argv.includes('--no-log') ? false : true);
const suppressPassed = process.env['HIDE_PASSED_TESTS'] === 'true' || process.argv.includes('--no-passed');
const suppressFailed = process.env['HIDE_FAILED_TESTS'] === 'true' || process.argv.includes('--no-failed');

webpackConfig.externals = Object.assign({}, webpackConfig.externals, {
  // 'cheerio': 'window',
  'react-addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
});

module.exports = function _webpackConfig(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],
    reporters: [
      'coverage',
      'html',
      'spec'
    ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/spec/**/*.js'
    ],
    preprocessors: {
      'test/spec/**/*.js': ['webpack', 'sourcemap']
    },
    proxies: {
      '/images/': 'http://0.0.0.0:8080/images/'
    },
    browsers: ['ChromeNoSandboxHeadless'],
    customLaunchers: {
      ChromeNoSandboxHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          // Without a debugging port, Chome exits immediately.
          '--remote-debugging-port=9222'
        ]
      }
    },
    singleRun: true,
    htmlReporter: {
      outputDir: 'test/results/spec'
    },
    specReporter: {
      maxLogLines: 2,
      suppressSkipped,
      suppressPassed,
      suppressFailed
    },
    coverageReporter: {
      dir: 'test/results/coverage',
      reporters: [
        { type: 'html' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noinfo: 'errors-only'
    }
  });
};