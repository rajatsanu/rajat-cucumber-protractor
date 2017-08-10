/// <reference path="../../../typings/index.d.ts" />
var BrowserInteractions = (function () {
    function BrowserInteractions(elem) {
        this.elem = elem;
    }
    BrowserInteractions.prototype.load = function (url, browserInstance) {
        var deferred = protractor.promise.defer();
        var browserInstance = browserInstance ? browserInstance : browser;
        browserInstance['get'](url).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    return BrowserInteractions;
})();
exports.BrowserInteractions = BrowserInteractions;
