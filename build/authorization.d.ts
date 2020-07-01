import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";
export declare class AuthorizationException extends Exception {
    /**
     * Exception for Unauthorized access.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message?: string, status?: number, headers?: StringObject);
}
