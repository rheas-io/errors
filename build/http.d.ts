import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";
export declare class HttpException extends Exception {
    /**
     * Creates an http exception
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(status?: number, message?: string, headers?: StringObject);
}
