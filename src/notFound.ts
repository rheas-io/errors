import { HttpException } from './http';
import { StringObject } from '@rheas/contracts';

export class NotFoundException extends HttpException {
    /**
     * Creates a 404 exception
     *
     * @param message
     * @param headers
     */
    constructor(message: string = '', headers: StringObject = {}) {
        super(404, message, headers);
    }
}
