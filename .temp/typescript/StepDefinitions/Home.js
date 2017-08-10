/// <reference path="../../../typings/index.d.ts" />
var common_1 = require('../common');
var steps = function () {
    var cmn = new common_1.Common();
    var homePage = require('../PageObject/HomePage');
    this.Given(/^Navigate to (.*)$/, function (portal, done) {
        browser.ignoreSynchronization = true;
        homePage.load(common_1.Common.url).then(function () {
            console.log('Navigate to : ' + portal);
            done();
        });
    });
    this.When(/^verify portal open successfully$/, function (next) {
        homePage.shouldExists('buyBookIndiaTitleLabel').then(function () {
            next();
        });
    });
    this.registerHandler('AfterFeatures', function (features, next) {
        next();
    });
};
module.exports = steps;
