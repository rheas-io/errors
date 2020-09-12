import { Exception } from './exception';

export class BindingNotFound extends Exception {
    /**
     * The key for which the container binding was not found.
     *
     * @param key
     */
    constructor(key: string) {
        super(`Binding not found for the key ${key}`);
    }
}
