import { ApiRequestOptions } from './ApiRequestOptions.js';
import { CancelablePromise } from './CancelablePromise.js';
import { OpenAPIConfig } from './OpenAPI.js';

declare abstract class BaseHttpRequest {
    readonly config: OpenAPIConfig;
    constructor(config: OpenAPIConfig);
    abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}

export { BaseHttpRequest };
