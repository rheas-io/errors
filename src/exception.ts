import { IApp } from "@rheas/contracts/core/app";
import { IException } from "@rheas/contracts/errors";
import { IRequest, IResponse, AnyObject, StringObject } from "@rheas/contracts";

/**
 * We are not extending the default Error class as it will introduce 
 * errors when transpiled using Babel. Babel have some issues transpiling 
 * extended Javascript native classes like Array, Err etc
 */
export class Exception implements IException {
    /**
     * Message for this exception
     * 
     * @var string
     */
    public message: string = "";

    /**
     * Stack trace of this error
     * 
     * @var string
     */
    public stack: string = "";

    /**
     * HTTP response status code
     * 
     * @var number
     */
    public status: number = 500;

    /**
     * Headers for this exception
     * 
     * @var string
     */
    public headers: StringObject = {};

    /**
     * We will capture the stack trace when this custom exception
     * gets called.
     * 
     * @param message 
     * @param status 
     * @param headers 
     */
    constructor(message: string = "", status: number = 500, headers: StringObject = {}) {
        this.message = message;
        this.status = status;
        this.headers = headers;

        Error.captureStackTrace(this);
    }

    /**
     * Creates an exception from general error.
     * 
     * @param error 
     */
    public static createFromError(error: Error | IException): IException {
        const exception = new Exception(error.message);
        exception.stack = error.stack || "";

        return exception;
    }

    /**
     * Sets the response status code and exception headers on the response
     * object.
     * 
     * @param response 
     * @param request 
     */
    public bindToResponse(response: IResponse): IResponse {

        response.statusCode = this.status;

        for (let index in this.headers) {
            response.setHeader(index, this.headers[index]);
        }
        return response;
    }

    /**
     * @inheritdoc
     * 
     * @param req 
     * @param res 
     */
    public renderResponse(req: IRequest, res: IResponse): IResponse {
        return req.redirect().to('/');
    }

    /**
     * @inheritdoc
     * 
     * @param req 
     * @param res 
     */
    public jsonResponse(req: IRequest, res: IResponse): IResponse {
        const app: IApp = req.get('app');
        const errorObject: AnyObject = {};

        errorObject["message"] = this.message || "Server error";
        errorObject["status"] = this.status || 500;

        if (app && app.config('app.debug')) {
            errorObject["trace"] = this.getPrintableTrace();
        }
        res.setContent(errorObject);

        return res;
    }

    /**
     * @inheritdoc
     * 
     * @returns array
     */
    public getPrintableTrace(): string[] {
        return this.stack.split(/\r?\n/g);
    }
}