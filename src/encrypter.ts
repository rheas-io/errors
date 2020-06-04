import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";

export class EncrypterException extends Exception {

    /**
     * Creates a new encrypter exception.
     * 
     * @param message 
     * @param status 
     * @param headers 
     */
    constructor(message: string = "Error decrypting the data", status: number = 500, headers: StringObject = {}) {
        super(message, status, headers);
    }
}