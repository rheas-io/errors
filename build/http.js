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
var HttpException = /** @class */ (function (_super) {
    __extends(HttpException, _super);
    /**
     * Creates an http exception
     *
     * @param message
     * @param status
     * @param headers
     */
    function HttpException(status, message, headers) {
        if (status === void 0) { status = 500; }
        if (message === void 0) { message = ""; }
        if (headers === void 0) { headers = {}; }
        return _super.call(this, message, status, headers) || this;
    }
    return HttpException;
}(exception_1.Exception));
exports.HttpException = HttpException;
