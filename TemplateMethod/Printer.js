"use strict";
exports.__esModule = true;
exports.Printer = void 0;
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function () {
        this.prefix();
        for (var i = 0; i < 3; i++) {
            this.body();
        }
        this.suffix();
    };
    return Printer;
}());
exports.Printer = Printer;
