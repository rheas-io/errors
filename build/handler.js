"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("./exception");
var ExceptionHandler = /** @class */ (function () {
    function ExceptionHandler() {
        /**
         * These field won't be sent back when showing errors.
         *
         * @var array
         */
        this._ignoreFields = [
            "password",
            "password_confirmation"
        ];
    }
    /**
     * Returns an error response with headers and body set.
     *
     * @param err
     * @param req
     * @param res
     */
    ExceptionHandler.prototype.responseFromError = function (err, req, res) {
        if (!(err instanceof exception_1.Exception)) {
            err = exception_1.Exception.createFromError(err);
        }
        res = err.bindToResponse(res);
        if (req.acceptsJson()) {
            return err.jsonResponse(req, res);
        }
        return err.renderResponse(req, res);
    };
    return ExceptionHandler;
}());
exports.ExceptionHandler = ExceptionHandler;
