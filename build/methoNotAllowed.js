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
var MethodNotAllowedException = /** @class */ (function (_super) {
    __extends(MethodNotAllowedException, _super);
    /**
     * Creates a method not allowed exception.
     *
     * @param methods
     * @param message
     * @param headers
     */
    function MethodNotAllowedException(methods, message, headers) {
        if (message === void 0) { message = ""; }
        if (headers === void 0) { headers = {}; }
        var _this = this;
        headers['Allow'] = methods.join(', ');
        _this = _super.call(this, message, 405, headers) || this;
        return _this;
    }
    return MethodNotAllowedException;
}(exception_1.Exception));
exports.MethodNotAllowedException = MethodNotAllowedException;
