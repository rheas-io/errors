"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("@rheas/support/helpers");
/**
 * We are not extending the default Error class as it will introduce
 * errors when transpiled using Babel. Babel have some issues transpiling
 * extended Javascript native classes like Array, Err etc
 */
class Exception {
    /**
     * We will capture the stack trace when this custom exception
     * gets called.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message = "", status = 500, headers = {}) {
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
    setException(err) {
        Error.captureStackTrace(err);
        return this;
    }
    /**
     * Creates an exception from general error.
     *
     * @param error
     */
    static createFromError(error) {
        const exception = new Exception(error.message);
        exception.stack = error.stack || "";
        return exception;
    }
    /**
     * Sets the response status code and exception headers on the response
     * object.
     *
     * @param response
     * @param request
     */
    bindToResponse(response) {
        response.statusCode = this.status;
        for (let index in this.headers) {
            response.setHeader(index, this.headers[index]);
        }
        return response;
    }
    /**
     * The handler that sets a redirect/view response for the exception.
     *
     * @param req
     * @param res
     */
    renderResponse(req, res) {
        return req.redirect().to('/');
    }
    /**
     * Sets the error object on response body. This object contains error message,
     * status and optionally the stack trace if the app is in debug mode.
     *
     * @param req
     * @param res
     */
    jsonResponse(req, res) {
        const errorObject = {};
        errorObject["message"] = this.message || "Server error";
        errorObject["status"] = this.status || 500;
        if (helpers_1.config('app.debug')) {
            errorObject["trace"] = this.getPrintableTrace();
        }
        res.setContent(errorObject);
        return res;
    }
    /**
     * @inheritdoc
     *
     * @returns array
     */
    getPrintableTrace() {
        return this.stack.split(/\r?\n/g);
    }
}
exports.Exception = Exception;
