"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
class ValidationException extends exception_1.Exception {
    /**
     * Set the error message and HTTP status code to 422.
     *
     * @param validator
     */
    constructor(validator) {
        super("Validation exception", 422);
        this.validator = validator;
    }
    /**
     * Returns the validator errors object. Error handler will
     * parse the errors to Json if required. Or the views can iterate
     * through the errors and display the error messages on view.
     *
     * @return object
     */
    getErrors() {
        return this.validator.getErrors();
    }
}
exports.ValidationException = ValidationException;
