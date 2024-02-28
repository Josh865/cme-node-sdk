import { CreateSessionRequest } from '../models/CreateSessionRequest.js';
import { CancelablePromise } from '../core/CancelablePromise.js';
import { BaseHttpRequest } from '../core/BaseHttpRequest.js';
import '../core/ApiRequestOptions.js';
import '../core/OpenAPI.js';

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
