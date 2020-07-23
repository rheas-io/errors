"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
class AuthorizationException extends exception_1.Exception {
    /**
     * Exception for Unauthorized access.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message = "Unauthorized", status = 401, headers = {}) {
        super(message, status, headers);
    }
}
exports.AuthorizationException = AuthorizationException;
