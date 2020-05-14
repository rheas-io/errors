import { Exception } from "./exception";
import { ILogger } from "@laress/contracts/log";
import { IRequest, ClassOf } from "@laress/contracts";
import { IResponse } from "@laress/contracts/core/response";
import { IContainer } from "@laress/contracts/container/container";
import { IException, IExceptionHandler } from "@laress/contracts/errors";

export class ExceptionHandler implements IExceptionHandler {

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
    protected _ignoreFields: string[] = [
        "password",
        "password_confirmation"
    ];

    /**
     * The list of exception classes that are not to be logged.
     * 
     * @var array
     */
    protected dontReport: ClassOf<IException>[] = [];

    /**
     * Creates a new exception handler.
     * 
     * @param app 
     */
    constructor(app: IContainer) {
        this.app = app;
    }

    /**
     * Creates a rheas exception from the error.
     * 
     * @param err 
     */
    public prepareException(err: Error | IException): IException {
        if (!(err instanceof Exception)) {
            err = Exception.createFromError(err);
        }
        return err;
    }

    /**
     * @inheritdoc
     * 
     * @param err 
     */
    public report(err: IException): void {
        const logger = this.app.get<ILogger>('logger');

        try {
            if (logger && this.shouldReport(err)) {
                logger.logException(err);
            }
        } catch (error) { }
    }

    /**
     * Checks if an exception is reportable or not.
     * 
     * @param err 
     */
    private shouldReport(err: IException): boolean {
        return !!this.dontReport.find(classOf => err instanceof classOf);
    }

    /**
     * Returns an error response with headers and body set.
     * 
     * @param err 
     * @param req 
     * @param res 
     */
    public responseFromError(err: IException, req: IRequest, res: IResponse): IResponse {

        res = err.bindToResponse(res);

        if (req.acceptsJson()) {
            return err.jsonResponse(req, res);
        }
        return err.renderResponse(req, res);
    }
}