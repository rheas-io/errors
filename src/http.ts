import { Exception } from './exception';
import { StringObject } from '@rheas/contracts';

export class HttpException extends Exception {
    /**
     * Creates an http exception
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(status: number = 500, message: string = '', headers: StringObject = {}) {
        super(message, status, headers);
    }
}
