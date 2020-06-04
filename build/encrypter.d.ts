import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";
export declare class EncrypterException extends Exception {
    /**
     * Creates a new encrypter exception.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message?: string, status?: number, headers?: StringObject);
}
