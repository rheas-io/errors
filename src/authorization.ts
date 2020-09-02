import { Exception } from './exception';
import { StringObject } from '@rheas/contracts';

export class AuthorizationException extends Exception {
    /**
     * Exception for Unauthorized access.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(
        message: string = 'Unauthorized',
        status: number = 401,
        headers: StringObject = {},
    ) {
        super(message, status, headers);
    }
}
