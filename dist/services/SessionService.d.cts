import { CreateSessionRequest } from '../models/CreateSessionRequest.cjs';
import { CancelablePromise } from '../core/CancelablePromise.cjs';
import { BaseHttpRequest } from '../core/BaseHttpRequest.cjs';
import '../core/ApiRequestOptions.cjs';
import '../core/OpenAPI.cjs';

declare class SessionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    createSession(requestBody: CreateSessionRequest): CancelablePromise<any>;
}

export { SessionService };
