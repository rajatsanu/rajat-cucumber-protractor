/// <reference path="../../../typings/index.d.ts" />

import {Common}  from '../common';

var steps =  function () {

    var cmn = new Common();
    var homePage = require('../PageObject/HomePage');

    this.Given(/^Navigate to (.*)$/,function (portal,next) {
        browser.ignoreSynchronization = true;
        homePage.load(Common.url).then(()=>{
            console.log('Navigate to : ' + portal);
            next();
        });
    });


    this.When(/^verify portal open successfully$/,function (next) {
        homePage.shouldExists('buyBookIndiaTitleLabel').then(()=>{
            next();
        });
    });


    this.registerHandler('AfterFeatures', function (features, next) {
        next();
    });


}

module.exports = steps;

