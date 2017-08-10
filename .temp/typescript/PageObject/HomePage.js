var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Utility_1 = require('../testResources/Utility');
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.call(this, {
            buyBookIndiaTitleLabel: { type: 'xpath', value: '//img[@title="Buy Books India"]' }
        });
    }
    return HomePage;
})(Utility_1.Utility);
module.exports = new HomePage();
