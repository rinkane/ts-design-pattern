"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.OneLiner = void 0;
var Printer_1 = require("./Printer");
var OneLiner = /** @class */ (function (_super) {
    __extends(OneLiner, _super);
    function OneLiner(str) {
        var _this = _super.call(this) || this;
        _this.str = str;
        return _this;
    }
    OneLiner.prototype.prefix = function () {
        process.stdout.write("#");
    };
    OneLiner.prototype.suffix = function () {
        console.log("#");
    };
    OneLiner.prototype.body = function () {
        process.stdout.write(this.str);
    };
    return OneLiner;
}(Printer_1.Printer));
exports.OneLiner = OneLiner;
