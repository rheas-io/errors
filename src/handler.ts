import { Exception } from "./exception";
import { IRequest } from "@laress/contracts";
import { IResponse } from "@laress/contracts/core/response";
import { IException, IExceptionHandler } from "@laress/contracts/errors";

export class ExceptionHandler implements IExceptionHandler {

    /**
     * These field won't be sent back when showing errors.
     * 
     * @var array
     */
    protected _ignoreFields: string[] = [
        "password",
        "password_confirmation"
    ];

    /**
     * Returns an error response with headers and body set.
     * 
     * @param err 
     * @param req 
     * @param res 
     */
    public responseFromError(err: IException, req: IRequest, res: IResponse): IResponse {

        if (!(err instanceof Exception)) {
            err = Exception.createFromError(err);
        }

        res = err.bindToResponse(res);

        if (req.acceptsJson()) {
            return err.jsonResponse(req, res);
        }
        return err.renderResponse(req, res);
    }
}