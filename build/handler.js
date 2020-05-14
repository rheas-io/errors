"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("./exception");
var ExceptionHandler = /** @class */ (function () {
    /**
     * Creates a new exception handler.
     *
     * @param app
     */
    function ExceptionHandler(app) {
        /**
         * These field won't be sent back when showing errors.
         *
         * @var array
         */
        this._ignoreFields = [
            "password",
            "password_confirmation"
        ];
        /**
         * The list of exception classes that are not to be logged.
         *
         * @var array
         */
        this.dontReport = [];
        this.app = app;
    }
    /**
     * Creates a rheas exception from the error.
     *
     * @param err
     */
    ExceptionHandler.prototype.prepareException = function (err) {
        if (!(err instanceof exception_1.Exception)) {
            err = exception_1.Exception.createFromError(err);
        }
        return err;
    };
    /**
     * @inheritdoc
     *
     * @param err
     */
    ExceptionHandler.prototype.report = function (err) {
        var logger = this.app.get('logger');
        try {
            if (logger && this.shouldReport(err)) {
                logger.logException(err);
            }
        }
        catch (error) { }
    };
    /**
     * Checks if an exception is reportable or not.
     *
     * @param err
     */
    ExceptionHandler.prototype.shouldReport = function (err) {
        return !!this.dontReport.find(function (classOf) { return err instanceof classOf; });
    };
    /**
     * Returns an error response with headers and body set.
     *
     * @param err
     * @param req
     * @param res
     */
    ExceptionHandler.prototype.responseFromError = function (err, req, res) {
        res = err.bindToResponse(res);
        if (req.acceptsJson()) {
            return err.jsonResponse(req, res);
        }
        return err.renderResponse(req, res);
    };
    return ExceptionHandler;
}());
exports.ExceptionHandler = ExceptionHandler;
