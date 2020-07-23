"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
class EncrypterException extends exception_1.Exception {
    /**
     * Creates a new encrypter exception.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message = "Error decrypting the data", status = 500, headers = {}) {
        super(message, status, headers);
    }
}
exports.EncrypterException = EncrypterException;
