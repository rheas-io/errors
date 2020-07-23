"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
class NotFoundException extends http_1.HttpException {
    /**
     * Creates a 404 exception
     *
     * @param message
     * @param headers
     */
    constructor(message = "", headers = {}) {
        super(404, message, headers);
    }
}
exports.NotFoundException = NotFoundException;
