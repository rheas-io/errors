import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";
export declare class NotFoundException extends Exception {
    /**
     * Creates a 404 exception
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message?: string, status?: number, headers?: StringObject);
}
