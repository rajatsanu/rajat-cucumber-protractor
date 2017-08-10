/// <reference path="../../../typings/index.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WebElementIntractions_1 = require("./WebElementIntractions");
var chai = require('chai');
var expect = chai.expect;
var Assertions = (function (_super) {
    __extends(Assertions, _super);
    function Assertions(elem) {
        _super.call(this, elem);
        this.elem = elem;
    }
    Assertions.prototype.shouldExists = function (key, browserInstance) {
        var deferred = protractor.promise.defer();
        var browserInstance = browserInstance ? browserInstance : browser;
        browserInstance['element'](by[this.elem[key].type](this.elem[key].value)).isPresent().then(function (exist) {
            expect(exist, "The element " + key + " should exists in page").to.be.true;
            deferred.fulfill();
        });
        return deferred.promise;
    };
    return Assertions;
})(WebElementIntractions_1.WebElementIntractions);
exports.Assertions = Assertions;
