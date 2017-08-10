exports.config = {
      //seleniumAddress: 'http://localhost:4444/wd/hub',
      capabilities: {
          'browserName': 'chrome'
      },

    specs: ['e2e/specsFile/*.feature'],

    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    resultJsonOutputFile: 'protractor-test-results.json',


    cucumberOpts: {
    require: ['support/*.js','.temp/**/*.js'],
    format: 'pretty',
    tags: '@rajat'
    
	}

   };