import { HttpException } from "./http";
import { StringObject } from "@rheas/contracts";
export declare class NotFoundException extends HttpException {
    /**
     * Creates a 404 exception
     *
     * @param message
     * @param headers
     */
    constructor(message?: string, headers?: StringObject);
}
