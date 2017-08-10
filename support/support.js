var Cucumber = require('cucumber');
fs = require('fs-extra');
path = require('path');

var JsonFormatter = Cucumber.Listener.JsonFormatter();

var reportFile = 'cucumber-test-results.json';

module.exports = function JsonOutputHook() {
  JsonFormatter.log = function (json) {
    var destination = reportFile;
    fs.open(destination, 'a+', function (err, fd) {
      if (err) {
        fs.mkdirsSync(destination);
        fd = fs.openSync(destination, 'a+');
      }

        console.log('json file location: ' + destination);

        fs.writeSync(fd, json);

    });
  };

  this.registerListener(JsonFormatter);
};
