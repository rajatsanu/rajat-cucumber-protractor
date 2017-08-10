/// <reference path="../../../typings/index.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Assertions_1 = require("./Assertions");
var Utility = (function (_super) {
    __extends(Utility, _super);
    function Utility(elem) {
        _super.call(this, elem);
        this.elem = elem;
    }
    return Utility;
})(Assertions_1.Assertions);
exports.Utility = Utility;
