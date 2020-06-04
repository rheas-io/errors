import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";

export class DecryptException extends Exception {

    /**
     * Creates a new decryption exception.
     * 
     * @param message 
     * @param status 
     * @param headers 
     */
    constructor(message: string = "", status: number = 500, headers: StringObject = {}) {
        message = message || "Error decrypting the data";

        super(message, status, headers);
    }
}