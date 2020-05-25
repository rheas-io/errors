"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("./exception");
var SuspiciousOperationException = /** @class */ (function (_super) {
    __extends(SuspiciousOperationException, _super);
    function SuspiciousOperationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SuspiciousOperationException;
}(exception_1.Exception));
exports.SuspiciousOperationException = SuspiciousOperationException;
