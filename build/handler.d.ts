import { IRequest } from "@laress/contracts";
import { IResponse } from "@laress/contracts/core/response";
import { IException, IExceptionHandler } from "@laress/contracts/errors";
export declare class ExceptionHandler implements IExceptionHandler {
    /**
     * These field won't be sent back when showing errors.
     *
     * @var array
     */
    protected _ignoreFields: string[];
    /**
     * Returns an error response with headers and body set.
     *
     * @param err
     * @param req
     * @param res
     */
    responseFromError(err: IException, req: IRequest, res: IResponse): IResponse;
}
