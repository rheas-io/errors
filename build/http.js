"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
class HttpException extends exception_1.Exception {
    /**
     * Creates an http exception
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(status = 500, message = "", headers = {}) {
        super(message, status, headers);
    }
}
exports.HttpException = HttpException;
