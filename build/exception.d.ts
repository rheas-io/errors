import { IException } from "@rheas/contracts/errors";
import { IRequest, IResponse, StringObject } from "@rheas/contracts";
/**
 * We are not extending the default Error class as it will introduce
 * errors when transpiled using Babel. Babel have some issues transpiling
 * extended Javascript native classes like Array, Err etc
 */
export declare class Exception implements IException {
    /**
     * Message for this exception
     *
     * @var string
     */
    message: string;
    /**
     * Stack trace of this error
     *
     * @var string
     */
    stack: string;
    /**
     * HTTP response status code
     *
     * @var number
     */
    status: number;
    /**
     * Headers for this exception
     *
     * @var string
     */
    headers: StringObject;
    /**
     * We will capture the stack trace when this custom exception
     * gets called.
     *
     * @param message
     * @param status
     * @param headers
     */
    constructor(message?: string, status?: number, headers?: StringObject);
    /**
     * Creates an exception from general error.
     *
     * @param error
     */
    static createFromError(error: Error | IException): IException;
    /**
     * Sets the response status code and exception headers on the response
     * object.
     *
     * @param response
     * @param request
     */
    bindToResponse(response: IResponse): IResponse;
    /**
     * @inheritdoc
     *
     * @param req
     * @param res
     */
    renderResponse(req: IRequest, res: IResponse): IResponse;
    /**
     * @inheritdoc
     *
     * @param req
     * @param res
     */
    jsonResponse(req: IRequest, res: IResponse): IResponse;
    /**
     * @inheritdoc
     *
     * @returns array
     */
    getPrintableTrace(): string[];
}
