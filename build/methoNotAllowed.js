"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
class MethodNotAllowedException extends exception_1.Exception {
    /**
     * Creates a method not allowed exception.
     *
     * @param methods
     * @param message
     * @param headers
     */
    constructor(methods, message = "", headers = {}) {
        headers['Allow'] = methods.join(', ');
        super(message, 405, headers);
    }
}
exports.MethodNotAllowedException = MethodNotAllowedException;
