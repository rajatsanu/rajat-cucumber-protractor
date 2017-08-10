/// <reference path="../../../typings/index.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BrowserInteractions_1 = require("./BrowserInteractions");
var WebElementIntractions = (function (_super) {
    __extends(WebElementIntractions, _super);
    function WebElementIntractions(elem) {
        _super.call(this, elem);
        this.elem = elem;
    }
    return WebElementIntractions;
})(BrowserInteractions_1.BrowserInteractions);
exports.WebElementIntractions = WebElementIntractions;
