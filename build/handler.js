"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
class ExceptionHandler {
    /**
     * Creates a new exception handler.
     *
     * @param app
     */
    constructor(app) {
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
    prepareException(err) {
        if (!(err instanceof exception_1.Exception)) {
            err = exception_1.Exception.createFromError(err);
        }
        return err;
    }
    /**
     * @inheritdoc
     *
     * @param err
     */
    report(err) {
        const logger = this.app.get('logger');
        try {
            if (logger && this.shouldReport(err)) {
                logger.logException(err);
            }
        }
        catch (error) { }
    }
    /**
     * Checks if an exception is reportable or not.
     *
     * @param err
     */
    shouldReport(err) {
        return !!this.dontReport.find(classOf => err instanceof classOf);
    }
    /**
     * Returns an error response with headers and body set.
     *
     * @param err
     * @param req
     * @param res
     */
    responseFromError(err, req, res) {
        res = err.bindToResponse(res);
        if (req.contents().acceptsJson()) {
            return err.jsonResponse(req, res);
        }
        return err.renderResponse(req, res);
    }
}
exports.ExceptionHandler = ExceptionHandler;
