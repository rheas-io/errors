import { IRequest, ClassOf } from "@laress/contracts";
import { IResponse } from "@laress/contracts/core/response";
import { IContainer } from "@laress/contracts/container/container";
import { IException, IExceptionHandler } from "@laress/contracts/errors";
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
