import { Exception } from "./exception";
import { StringObject } from "@rheas/contracts";
export declare class MethodNotAllowedException extends Exception {
    /**
     * Creates a method not allowed exception.
     *
     * @param methods
     * @param message
     * @param headers
     */
    constructor(methods: string[], message?: string, headers?: StringObject);
}
