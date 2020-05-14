import { IRequest, ClassOf } from "@rheas/contracts";
import { IResponse } from "@rheas/contracts/core/response";
import { IContainer } from "@rheas/contracts/container/container";
import { IException, IExceptionHandler } from "@rheas/contracts/errors";
export declare class ExceptionHandler implements IExceptionHandler {
    /**
     * The container instance
     *
     * @var IContainer
     */
    protected app: IContainer;
    /**
     * These field won't be sent back when showing errors.
     *
     * @var array
     */
    protected _ignoreFields: string[];
    /**
     * The list of exception classes that are not to be logged.
     *
     * @var array
     */
    protected dontReport: ClassOf<IException>[];
    /**
     * Creates a new exception handler.
     *
     * @param app
     */
    constructor(app: IContainer);
    /**
     * Creates a rheas exception from the error.
     *
     * @param err
     */
    prepareException(err: Error | IException): IException;
    /**
     * @inheritdoc
     *
     * @param err
     */
    report(err: IException): void;
    /**
     * Checks if an exception is reportable or not.
     *
     * @param err
     */
    private shouldReport;
    /**
     * Returns an error response with headers and body set.
     *
     * @param err
     * @param req
     * @param res
     */
    responseFromError(err: IException, req: IRequest, res: IResponse): IResponse;
}
