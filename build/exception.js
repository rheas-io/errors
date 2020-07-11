"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("@rheas/support/helpers");
/**
 * We are not extending the default Error class as it will introduce
 * errors when transpiled using Babel. Babel have some issues transpiling
 * extended Javascript native classes like Array, Err etc
 */
var Exception = /** @class */ (function () {
    /**
     * We will capture the stack trace when this custom exception
     * gets called.
     *
     * @param message
     * @param status
     * @param headers
     */
    function Exception(message, status, headers) {
        if (message === void 0) { message = ""; }
        if (status === void 0) { status = 500; }
        if (headers === void 0) { headers = {}; }
        /**
         * Message for this exception
         *
         * @var string
         */
        this.message = "";
        /**
         * Stack trace of this error
         *
         * @var string
         */
        this.stack = "";
        /**
         * HTTP response status code
         *
         * @var number
         */
        this.status = 500;
        /**
         * Headers for this exception
         *
         * @var string
         */
        this.headers = {};
        this.message = message;
        this.status = status;
        this.headers = headers;
        Error.captureStackTrace(this);
    }
    /**
     * Sets the given error as this exceptions error/stack.
     *
     * @param err
     */
    Exception.prototype.setException = function (err) {
        Error.captureStackTrace(err);
        return this;
    };
    /**
     * Creates an exception from general error.
     *
     * @param error
     */
    Exception.createFromError = function (error) {
        var exception = new Exception(error.message);
        exception.stack = error.stack || "";
        return exception;
    };
    /**
     * Sets the response status code and exception headers on the response
     * object.
     *
     * @param response
     * @param request
     */
    Exception.prototype.bindToResponse = function (response) {
        response.statusCode = this.status;
        for (var index in this.headers) {
            response.setHeader(index, this.headers[index]);
        }
        return response;
    };
    /**
     * The handler that sets a redirect/view response for the exception.
     *
     * @param req
     * @param res
     */
    Exception.prototype.renderResponse = function (req, res) {
        return req.redirect().to('/');
    };
    /**
     * Sets the error object on response body. This object contains error message,
     * status and optionally the stack trace if the app is in debug mode.
     *
     * @param req
     * @param res
     */
    Exception.prototype.jsonResponse = function (req, res) {
        var errorObject = {};
        errorObject["message"] = this.message || "Server error";
        errorObject["status"] = this.status || 500;
        if (helpers_1.config('app.debug')) {
            errorObject["trace"] = this.getPrintableTrace();
        }
        res.setContent(errorObject);
        return res;
    };
    /**
     * @inheritdoc
     *
     * @returns array
     */
    Exception.prototype.getPrintableTrace = function () {
        return this.stack.split(/\r?\n/g);
    };
    return Exception;
}());
exports.Exception = Exception;
