import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";
export declare class DecryptException extends Exception {
    /**
     * Creates a new decryption exception.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message?: string, status?: number, headers?: StringObject);
}
