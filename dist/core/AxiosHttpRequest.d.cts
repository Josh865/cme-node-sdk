import { ApiRequestOptions } from './ApiRequestOptions.cjs';
import { BaseHttpRequest } from './BaseHttpRequest.cjs';
import { CancelablePromise } from './CancelablePromise.cjs';
import { OpenAPIConfig } from './OpenAPI.cjs';

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
