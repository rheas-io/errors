import { Exception } from "./exception";
import { StringObject } from "@laress/contracts";

export class NotFoundException extends Exception {

    /**
     * Creates a 404 exception
     * 
     * @param message 
     * @param status 
     * @param headers 
     */
    constructor(message: string = "", status: number = 404, headers: StringObject = {}) {
        super(message, status, headers);
    }
}