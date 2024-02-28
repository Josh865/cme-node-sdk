import { ApiRequestOptions } from './ApiRequestOptions.js';
import { BaseHttpRequest } from './BaseHttpRequest.js';
import { CancelablePromise } from './CancelablePromise.js';
import { OpenAPIConfig } from './OpenAPI.js';

declare class AxiosHttpRequest extends BaseHttpRequest {
    constructor(config: OpenAPIConfig);
    /**
     * Request method
     * @param options The request options from the service
     * @returns CancelablePromise<T>
     * @throws ApiError
     */
    request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}

export { AxiosHttpRequest };
